E‑Cell Dashboard

A web application for an Entrepreneurship Cell (E‑Cell) that provides a real‑time dashboard where participants can see the leaderboard, upcoming events, and notifications. Admin users can manage the leaderboard and events (create, update, delete) and push notifications. All admin and participant actions are protected by authentication and authorization.

Features

Participant-facing:

View  leaderboard.

See upcoming events with details.

Receive notifications (announcements, reminders).

Authentication (signup/login) with JWT.

Admin-facing:

Add / Update / Delete leaderboard entries.

Create  events.

Send  notifications.

Role-based authorization — only admins can access management APIs.

Security & infrastructure:

Password hashing with bcrypt.

Token-based authentication with JWT.

RESTful API built with Node.js and Express.

Database: MongoDB (Mongoose models).

Frontend: React + Tailwind CSS.

Tech stack

Frontend: React, Tailwind CSS, HTML, JavaScript

Backend: Node.js, Express

Database: MongoDB (Mongoose)

Auth & security: bcrypt, jsonwebtoken (JWT)

Other: Axios (or fetch), dotenv, cors
