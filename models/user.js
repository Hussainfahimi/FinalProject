const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//User registration table
const userSchema = new Schema({
  name: { type: String, required: true},
  email: { type: String, required: true },
  password: {type: String, required: true}

});
//Driver Registration table
/*
const driverSchema = new Schema({
  fullName: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  phone: {type: String, required: true},
  car: {type: String, required: true},
  trip: {type: String, required: true},
  date: {type: Date, required: true},
  time: {type: TimeRanges, required: true}

});
*/



const User = mongoose.model("User", userSchema);


module.exports = User;
