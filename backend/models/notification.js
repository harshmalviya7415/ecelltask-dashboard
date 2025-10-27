const mongoose = require('mongoose');

const Noticreat = new mongoose.Schema({
    heading: {
        type: String,
        required: true,
        
    },
    description: {
        type: String,
        required: true,
        
    },
  

    
},

{
        timestamps: true,
    }
);


const Notification = mongoose.model("Notification", Noticreat);

module.exports = Notification;