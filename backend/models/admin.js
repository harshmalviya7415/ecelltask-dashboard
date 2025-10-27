const mongoose = require('mongoose');

const admincreat = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        
    },
    password: {
        type: String,
        required: true,
    },

    
},

);


const Admin = mongoose.model("Admin", admincreat);

module.exports = Admin;