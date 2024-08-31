// import User from "../Models/userModel.js";
// import bcrypt from "bcrypt";
// import jsonwebtoken from "jsonwebtoken";

// export const register = async (req, res) => {
//   const { name, email, password } = req.body;
//   try {
//     const saltRounds = 10;
//     const salt = await bcrypt.genSalt(saltRounds);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // Check if the user already exists
//     const findUser = await User.findOne({ email });
//     if (findUser) {
//       return res.status(201).json({ message: "The user already exists" });
//     }

//     // Create a new user
//     const userData = new User({ name, email, password: hashedPassword });
//     const user = await userData.save();

//     // Create the JWT payload
//     const payload = {
//       user: {
//         id: user.id,
//       },
//     };

//     // Generate the token
//     jsonwebtoken.sign(
//       payload,
//       process.env.JWT_SECRET,
//       { expiresIn: "10h" },
//       async (err, token) => {
//         if (err) {
//           console.error(err.message);
//           return res
//             .status(500)
//             .json({ message: "Server error in JWT secret" });
//         }

//         // Save the token to the user document
//         user.token = token;
//         await user.save();

//         // Send the user data and token in the JSON response
//         res.status(200).json({ user, token });
//       }
//     );
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// export const loginUser = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const findUser = await User.findOne({ email });
//     if (!findUser) {
//       res.status(500).json({ message: "user not found please register" });
//     }
//     const validateuser = await bcrypt.compare(password, findUser.password);
//     if (!validateuser) {
//       res.status(500).json({ message: "Invalid password" });
//     }
//     const token = jsonwebtoken.sign(
//       { id: findUser.id },
//       process.env.JWT_SECRET,
//       {
//         expiresIn: "1h",
//       }
//     );
//     res.json({
//       token,
//       user: {
//         id: findUser.id,
//         username: findUser.username,
//         email: findUser.email,
//       },
//     });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import jsonwebtoken from "jsonwebtoken";

const prisma = new PrismaClient();

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Validate input
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Name, email, and password are required" });
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    // Create JWT payload
    const payload = {
      user: {
        id: newUser.id,
      },
    };

    // Generate JWT
    jsonwebtoken.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "10h" },
      async (err, token) => {
        if (err) {
          console.error(err.message);
          return res
            .status(500)
            .json({ message: "Server error in JWT generation" });
        }

        // Update user with token
        await prisma.user.update({
          where: { id: newUser.id },
          data: { token },
        });

        // Send response with user data and token
        res.status(201).json({ user: newUser, token });
      }
    );
  } catch (error) {
    console.error("Error during user registration:", error);
    res.status(500).json({ message: "Error in server registration" });
  }
};
