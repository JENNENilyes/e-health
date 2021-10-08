const mongoose = require('mongoose');

const EvenementSchema = mongoose.Schema({
    start: {type: Date},
    end: {type: Date},
    title:{type: String},
    type:{type: String},
    degre:{type: String},
    
});
const Evenement= mongoose.model('Evenement',EvenementSchema);
module.exports = Evenement ;