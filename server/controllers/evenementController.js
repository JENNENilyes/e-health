const EvenementModel= require('../models/EvenementModel');
const ObjectID = require('mongoose').Types.ObjectId;



module.exports.ReadEvenement = async (req , res)=>{
    EvenementModel.find((err,docs)=>{
        if(!err) res.send(docs);
        else console.log("Error to get data :  " + err);
    })
}


module.exports.createEvenement = (req, res) => {
    let newRecord = new EvenementModel({
        start: req.body.start,
        end: req.body.end,
        title: req.body.title,
        type: req.body.type,
        degre:req.body.degre,
       

   });
   newRecord.save((err, docs) => {
       if(!err) res.send(docs);
       else console.log('error creating new data   : ' +err);
   })
};


