import Blog from "../Models/blogModel.js";

export const postBlog = async (req, res) => {
  const { blogtitle, blogdescription } = req.body;
  try {
    const addBlog = new Blog({ blogtitle, blogdescription });
    const newBlog = await addBlog.save();
    res.status(200).json(newBlog);
  } catch (error) {
    res.status(400).json({ message: "error in posting the blog" });
  }
};
