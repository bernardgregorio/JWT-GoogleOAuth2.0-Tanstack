import mongoose from "mongoose";
const schema = mongoose.Schema;

const userSchema = new schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    validate: {
      validator: function (value) {
        // If googleId is not present, password is required
        return this.googleId || value;
      },
    },
  },
  email: {
    type: String,
    required: true,
  },
  refreshToken: {
    type: String,
    default: null,
  },
  googleId: {
    type: String,
    unique: true,
    default: null,
  },
});

export default mongoose.model("User", userSchema);
