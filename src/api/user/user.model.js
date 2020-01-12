import { Schema, model } from "mongoose";

export const userSchema = new Schema({
  firstName: String,
  lastName: String,
  dateOfBirth: Date,
  isAdmin: Boolean,
  phone: {
    type: String,
    unique: true
  },
  address: {
    city: String,
    state: String,
    district: String,
    pincode: String
  }
});

export const User = model("User", userSchema);
