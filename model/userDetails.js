import mongoose from "mongoose";
const userDetailsSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const userdetails = mongoose.model("Userdetails", userDetailsSchema);
export default userdetails;
