

const mongoose = require("mongoose");
const Schema = mongoose.Schema;



//Driver Registration table

const driverSchema = new Schema({
  fullName: {type: String, required: true},
  email: {type: String, required: true},
  
  phone: {type: String, required: true},
  car: {type: String, required: true},
  trip: {type: String, required: true}
});

//date: {type: Date, required: true},
//time: {type: TimeRanges, required: true}


const Driver = mongoose.model("Driver", driverSchema);

module.exports = Driver;

