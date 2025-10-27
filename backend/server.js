const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { usercreat } = require('./controller/usercreat')
const {noticreat} = require('./controller/noticreat')
const { loginuser } = require('./controller/login')
const { eventcreat } = require("./controller/eventcreat");
const { leadercreat } = require("./controller/leadercreat")
const connectDb = require('./config/db');
const { auth } = require("./config/auth");
const User = require("./models/user")
const Notification = require("./models/notification");
const Leader = require("./models/leaderbord")
const Admin = require("./models/admin");
const { loginadmin } = require("./controller/loginadmin");
const { authadmin } = require("./config/authadmin");

dotenv.config();
const app = express();

app.use(express.urlencoded({ extended: true })); 

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

const PORT = process.env.PORT || 1500;

app.post("/api/sign", usercreat);
app.post("/api/login", loginuser);
app.get("/api/dashboard", auth, async (req, res) => {
  
  const user = await User.findById(req.userId);
  const userf = await User.find({});

  res.json({ user, userf });
 
});
app.get("/api/admindashboard", authadmin, async (req, res) => {
  const user = await Admin.findById(req.userId);
  res.json({ user });
  
});
app.post("/api/adminlogin", loginadmin);
app.post("/api/logout", (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    expires: new Date(0),
    sameSite: "strict",
    secure: false,
  });
  res.redirect("/login")
});
app.post("/api/notiadd", noticreat);
app.post("/api/eventadd", eventcreat);
app.post("/api/leaderadd", leadercreat);

app.get("/api/noti", async (req, res) => {
  const noti = await Notification.find({});
  console.log(noti);
  res.json({ noti });
});
app.get("/api/leader", async (req, res) => {
  const leader = await Leader.find({});
  console.log(leader);
  res.json({ leader });
});

app.post("/api/deletlist", async (req, res) => {
  const leader = await Leader.findByIdAndDelete(req.body.id);
  res.redirect("/leaderlist");
});
app.post("/api/editlist", async (req, res) => {

  const user = await Leader.findByIdAndUpdate(
    req.body.id,
    { $set: { username:req.body.username, email:req.body.email , rank:req.body.rank } },
    { new: true, runValidators: true }
  );
  res.json({mess:"Update Sicessfully"});
});



app.listen(PORT, () => {
    connectDb();
    console.log(`Server Startde::: ${PORT}`);
});
