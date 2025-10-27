const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const gentoken = require("../config/gen");
const User = require("../models/user");
const loginuser = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
   res.json({ mess: "please fill the fild" });
    return;
  }
  
    const user = await User.findOne({ username });

    if (!user) {
       res.json({ mess: "user not exixt" });
        return;
    }
    const match =await bcrypt.compare(password,user.password)
    if (!match) {
        res.json({ mess: "password not match" });
}
  const token = await gentoken(user._id);

  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    secure: false, 
    sameSite: "Lax", 
  });

 
    res.status(200).json({ message: "Login successful" });
};

module.exports = { loginuser };
