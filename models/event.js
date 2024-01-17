const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  eventName: String,
  date: Date,
  time: String,
  organisingDept: String,
  category: String,
  type: String,
  venue: String,
  meetlink: String,
  description: String,
  studentCoordinatorInfo: String,
  facultyCoordinatorInfo: String,
  socialMediaLinks: String,
  userId: String,
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
