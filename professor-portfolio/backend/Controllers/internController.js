import Intern from "../Models/internModel.js";

export const postIntern = async (req, res) => {
  const { interntitle, interndescription } = req.body;
  try {
    const addIntern = new Intern({ interntitle, interndescription });
    const newIntern = await addIntern.save();
    res.status(200).json(newIntern);
  } catch (error) {
    res.status(400).json({ message: "error in posting the blog" });
  }
};
