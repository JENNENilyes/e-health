const UserModel = require('../models/UserModel');

const ObjectID = require('mongoose').Types.ObjectId;



//get client
module.exports.readUser = (req, res) => {
    UserModel.find((err, docs) => {
        if(!err) res.send(docs);
        else console.log("Error to get data :  " + err);
    })
}


//router.post('/',(req,res)=>{
module.exports.createUser = (req, res) => {
     let newRecord = new UserModel({
        name: req.body.name,
        test:req.body.test
        

    });
    newRecord.save((err, docs) => {
        if(!err) res.send(docs);
        else console.log('error creating new data   : ' +err);
    })
}


