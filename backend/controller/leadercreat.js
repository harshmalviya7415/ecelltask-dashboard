const mongoose = require("mongoose");
const Laeder = require("../models/leaderbord");


const leadercreat = async (req, res) => {
  const { username, email,rank } = req.body;
  if (!username || !email || !rank) {
    res.json({ mess: "pleas fill the field" });
    return;
  }

  const leader = await Laeder.create({
    username,
    email,
    rank,
  });

  console.log("noticreated");
  res.json({ mess: "LeaderBoard Updated" });
};

module.exports = { leadercreat };
