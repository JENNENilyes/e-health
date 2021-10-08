const mongoose = require('mongoose');

const EVSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'},
    start: {type: Date},
    end: {type: Date},
    title:{type: String},
    type:{type: String},
    degre:{type: String},
    
});
const EV= mongoose.model('EV',EVSchema);
module.exports = EV ;