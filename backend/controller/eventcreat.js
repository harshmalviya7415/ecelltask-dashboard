const mongoose = require("mongoose");
const Event = require("../models/event");

const eventcreat = async (req, res) => {
  const { heading, description, deadline } = req.body;
  if (!heading || !description || !deadline) {
    res.json({ mess: "pleas fill the field" });
    return;
  }

  const event = await Event.create({
    heading,
      description,
    deadline,
  });

  console.log("eventcreated");
  res.json({ mess: "Event Created" });
};

module.exports = { eventcreat };
