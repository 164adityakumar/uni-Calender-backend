const Event = require('../models/event.js');

const eventController = {
  getAllEvents: async (req, res) => {
    try {
      const events = await Event.find({});
      res.json(events);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },

  getEventByUser: async (req, res) => {
    try {
      const events = await Event.find({ userId: req.params.userId });
      res.json(events);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },

  getEventByMonth: async (req, res) => {
    try {
      const events = await Event.find({ month: req.params.month });
      res.json(events);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },

  getEventByDate: async (req, res) => {
    try {
      const events = await Event.find({ date: req.params.date });
      res.json(events);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },

  getEventByWeek: async (req, res) => {
    try {
      const events = await Event.find({ week: req.params.week });
      res.json(events);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },

  getEventByCategory: async (req, res) => {
    try {
      const events = await Event.find({ category: req.params.category });
      res.json(events);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },

  getEventByType: async (req, res) => {
    try {
      const events = await Event.find({ type: req.params.type });
      res.json(events);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },

  createEvent: async (req, res) => {
    const event = new Event(req.body);
    try {
      const savedEvent = await event.save();
      res.json(savedEvent);
    } catch (err) {
      console.error(err);
      res.status(500).send(err);
    }
  },

  updateEvent: async (req, res) => {
    try {
      const event = await Event.findOneAndUpdate(
        { _id: req.params.eventId },
        req.body,
        { new: true }
      );
      res.json(event);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },

  deleteEventByUser: async (req, res) => {
    try {
      const event = await Event.findOneAndDelete({
        userId: req.params.userId,
        _id: req.params.eventId,
      });
      res.json(event);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },
};

module.exports = eventController;