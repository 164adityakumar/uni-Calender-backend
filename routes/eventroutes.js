const express = require("express");
const router = express.Router();
const eventController = require("../controller/eventController.js");

router.get("/", eventController.getAllEvents);
router.get("/:userId", eventController.getEventByUser);
router.get("/month/:month", eventController.getEventByMonth);
router.get("/date/:date", eventController.getEventByDate);
router.get("/week/:week", eventController.getEventByWeek);
router.get("/category/:category", eventController.getEventByCategory);
router.get("/type/:type", eventController.getEventByType);
router.post("/", eventController.createEvent);
router.put("/:eventId", eventController.updateEvent);
router.delete("/:userId/:eventId", eventController.deleteEventByUser);

module.exports = router;
