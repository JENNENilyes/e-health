const mongoose = require('mongoose');

const signUpTemplate = new mongoose.Schema({
    
    
    username:{
        type: String
        //required: true
    },

    email:{
        type: String,
        //required: true
    },

    passwordHash:{
        type: String,
        //required: true
    },
    test:{
        type: String,
        default : "B"
    },
    avatar:{
        type: String,
        default : "11.png"
    },

    date:{
        type: Date,
        default: Date.now
    }
    
})

module.exports = mongoose.model('user', signUpTemplate);
