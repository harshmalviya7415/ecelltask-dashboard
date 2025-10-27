const mongoose = require("mongoose");
const Notification = require("../models/notification");

const noticreat = async (req, res) => {
  const { heading, description} = req.body;
    if (!heading || !description) {
        res.json({ mess: "pleas fill the field" });
        return;
    }

  const noti = await Notification.create({
    heading,
    description,
    
  });

  console.log("noticreated");
  res.json({ mess: "Notification Created" });
};

module.exports = { noticreat };
