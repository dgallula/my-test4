const mongoose = require("mongoose");

const AccountSchema = mongoose.Schema(
  {
    clientId: String,
    firstName: String,
    lastName: String,
    accountNumber: Number,
    phoneNumber: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Account", AccountSchema);