import mongoose from "mongoose";

const publicationSchema = new mongoose.Schema({
  image: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  publicationdate: {
    type: String,
    required: true,
  },

  shortdescription: {
    type: String,
    required: true,
  },

  longdescription: {
    type: String,
    required: true,
  },
});

const publications = mongoose.model("Publication", publicationSchema);

export default publications;
