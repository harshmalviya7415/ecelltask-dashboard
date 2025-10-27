const mongoose = require("mongoose");

const gentoken = require("../config/gen");
const Admin = require("../models/admin");
const loginadmin = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.json({ mess: "please fill the fild" });
    return;
  }

  const user = await Admin.findOne({ username });

  if (!user) {
    res.json({ mess: "user not exixt" });
    return;
  }
  
  if (password !== user.password) {
    res.json({ mess: "password not match" });
  }
  const token = await gentoken(user._id);

  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 1 * 24 * 60 * 60 * 1000,
    secure: false, 
    sameSite: "Lax", 
  });

  res.status(200).json({ message: "Login successful" });
};

module.exports = { loginadmin };
