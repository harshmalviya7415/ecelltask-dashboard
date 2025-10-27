const mongoose = require('mongoose');

const usercreat = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        
    },
    email: {
        type: String,
        required: true,
        
    },
    password: {
        type: String,
        required: true,
    },

    
},

{
        timestamps: true,
    }
);


const User = mongoose.model("User", usercreat);

module.exports = User;