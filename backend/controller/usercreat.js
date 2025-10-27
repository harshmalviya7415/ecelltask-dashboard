const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const gentoken = require('../config/gen')
const User = require('../models/user')
const usercreat = async (req, res) => {
    const {username , email, password } = req.body;
    if (!username || !email || !password) {
        res.json({mess:"pleas fill the field"});
        return;
    }
    const user =  await User.findOne({ username });
    const emailid = await User.findOne({ email });
    if (user) {
        
        res.json({ mess: "user alredy exixt" });
        console.log("user alredy exixt");
        return
    }
    if (emailid) {
        res.json({ mess: "email alredy exixt" });
        console.log("email alredy exixt");
        return
    }

    const hashpass = await bcrypt.hash(password, 10);

    const userf = await User.create({
        username,
        email,
        password: hashpass,
        
    });

    const token = await gentoken(userf._id);

    res.cookie("token", token, {
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        sameSite: "None",
        secure: false,
    });
    console.log("usercreated")
    res.json(userf);
   
 
}

module.exports = { usercreat };