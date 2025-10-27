const mongoose = require('mongoose');

const Ledrcreat = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        
    },
    email: {
        type: String,
        required: true,
        
    },
    rank: {
        type: String,
        required: true,
    },

    
},

{
        timestamps: true,
    }
);


const Laeder = mongoose.model("Leader", Ledrcreat);

module.exports = Laeder;