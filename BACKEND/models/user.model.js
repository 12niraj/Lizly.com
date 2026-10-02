import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  qrcount: {
    type: Number,
    default: 0,
  },
  termsAccepted: {
    type: Boolean,
    required: true,
    default: false,
  },

  termsAcceptedAt: {
    type: Date,
  },
});

const User = mongoose.model("User", userSchema);
export default User;
