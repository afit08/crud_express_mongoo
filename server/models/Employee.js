const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');
const Schema = mongoose.Schema;

const employeeSchema = new Schema(
  {
    _id: {
      type: String,
      default: uuidv4,
    },
    name: {
      type: String,
    },
    designation: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    age: {
      type: Number,
    },
    avatar: {
      type: String
    }
  },
  { timestamps: true }
);

const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;
