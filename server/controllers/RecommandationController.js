
/*const RecomandationModel = require('../models/RecommandationModel');
const EvenementModel= require('../models/EvenementModel');
const UserModel = require('../models/UserModel');
const moment = require('moment');

const ObjectID = require('mongoose').Types.ObjectId;


module.exports.readRecomUser = async (req, res) => {
    // http://localhost:5500/facturef?fournisseurs=6081b7360b0d8b47807c85f3

    let filter = {};
    if(req.query.user)
    {
         filter = {
             user: req.query.user.split(','),
            }
    }

    const factListe = await RecomandationModel.find(filter).populate('user').populate('evenement');

    if(!factListe) {
        res.status(500).json({success: false})
    } 
    res.send(factListe);

}




//router.post('/',(req,res)=>{
module.exports.createRecomUser = async (req, res) => {
    // chercher les evenements / event.type=user.type
    const typeUser= await UserModel.findById(req.body.user);
    const Type = typeUser["test"].toString();


    const eventlist =await EvenementModel.find({type:Type});
    //console.log(eventlist);
    console.log(eventlist)
    

    const L=[];
    for (const e of eventlist){
        L.push(e["_id"].toString())
    }
    console.log(L)
    //console.log(req.body.evenement);
    let newRecord = new RecomandationModel({
        user: req.body.user,
        evenement:L,

    });
    newRecord.save((err, docs) => {
        if(!err) res.send(docs);
        else console.log('error creating new data   : ' +err);
    })
}


module.exports.readRecomUserEvent = async (req, res) => {
    // http://localhost:5500/facturef?fournisseurs=6081b7360b0d8b47807c85f3

    let filter = {};
    if(req.query.user)
    {
         filter = {user: req.query.user.split(',')}
    }

    const factListe = await RecomandationModel.findOne(filter).populate({ path: 'evenement', match: {
        start: {$gte: moment(req.query.start).toDate() },
        end: {$lte: moment(req.query.end).toDate()},
    }});

    if(!factListe) {
        res.status(500).json({success: false})
    } 
    res.send(factListe["evenement"]);

}



*/


