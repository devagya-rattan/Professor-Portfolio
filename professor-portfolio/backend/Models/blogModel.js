import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  blogtitle: {
    type: String,
    required: true,
  },
  blogdescription: {
    type: String,
    required: true,
  },
});

const Blog = mongoose.model("Blogs", blogSchema);

export default Blog;
