const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    minLength: [5, "Username must be at least 5 characters"],
    match: [
      /^[A-Za-z0-9]+$/,
      "Username must be contain only English letters and digits",
    ],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minLength: [8, "Password must be at least 8 characters"],
    match: [
        /^[A-Za-z0-9]+$/,
        "Password must be contain only English letters and digits",
      ],
  },
});

userSchema.virtual("repeatPassword").set(function (value) {
  if (value !== this.password) {
    throw new Error("Password missmatch");
  }
});

userSchema.pre("save", async function () {
  const hash = await bcrypt.hash(this.password, 5);

  this.password = hash;
});

userSchema.path("username").validate(async (username) => {
  const count = await mongoose.models.User.countDocuments({ username });
  return !count
}, "Username already exists");

const User = mongoose.model("User", userSchema);

module.exports = User;
