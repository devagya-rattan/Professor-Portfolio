import User from "../Models/userModel.js";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Check if the user already exists
    const findUser = await User.findOne({ email });
    if (findUser) {
      return res.status(201).json({ message: "The user already exists" });
    }

    // Create a new user
    const userData = new User({ name, email, password: hashedPassword });
    const user = await userData.save();

    // Create the JWT payload
    const payload = {
      user: {
        id: user.id,
      },
    };

    // Generate the token
    jsonwebtoken.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
      async (err, token) => {
        if (err) {
          console.error(err.message);
          return res
            .status(500)
            .json({ message: "Server error in JWT secret" });
        }

        // Save the token to the user document
        user.token = token;
        await user.save();

        // Send the user data and token in the JSON response
        res.status(200).json({ user, token });
      }
    );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const findUser = await User.findOne({ email });
    if (!findUser) {
      res.status(500).json({ message: "user not found please register" });
    }
    const validateuser = await bcrypt.compare(password, findUser.password);
    if (!validateuser) {
      res.status(500).json({ message: "Invalid password" });
    }
    const token = jsonwebtoken.sign(
      { id: findUser.id },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    res.json({
      token,
      user: {
        id: findUser.id,
        username: findUser.username,
        email: findUser.email,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
