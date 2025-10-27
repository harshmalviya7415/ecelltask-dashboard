const mongoose = require('mongoose');

const Eventcreat = new mongoose.Schema({
    heading: {
        type: String,
        required: true,
        
    },
    description: {
        type: String,
        required: true,
        
    },
    deadline: {
        type: String,
        required: true,
    },

    
},

{
        timestamps: true,
    }
);


const Event= mongoose.model("Event", Eventcreat);

module.exports = Event;