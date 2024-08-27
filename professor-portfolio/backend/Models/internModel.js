import mongoose from "mongoose";

const internSchema = new mongoose.Schema({
  interntitle: {
    type: String,
    required: true,
  },
  interndescription: {
    type: String,
    required: true,
  },
});

const Intern = mongoose.model("Interns", internSchema);

export default Intern;
