import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: String,
    location: String,
    type: String,
    experience: String,
    description: String,
    skills: [String],
    isActive: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Job", jobSchema);