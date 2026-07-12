import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    position: String,
    message: String,
    resume: String
  },
  { timestamps: true }
);

export default mongoose.model("Application", applicationSchema);