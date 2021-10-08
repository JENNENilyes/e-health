
const EVModel = require('../models/EVModel');
const EvenementModel= require('../models/EvenementModel');
const UserModel = require('../models/LoginModel');
const moment = require('moment');

const ObjectID = require('mongoose').Types.ObjectId;



//router.post('/',(req,res)=>{
module.exports.createRecomUser = async (req, res) => {
    // chercher les evenements / event.type=user.type
    const typeUser= await UserModel.findById(req.body.user);
    const Type = typeUser["test"].toString();


    const eventlist =await EvenementModel.find({type:Type});
    //console.log(eventlist);
    const L=[];
    var i=0;
    for (const e of eventlist){
        //const star=e["start"];
        //const en=e["end"];
        const typ=e["type"];
        const titl=e["title"].toString();

        //creer events apartir date de test 
        var dateStart = new Date();
        dateStart.setDate(parseInt(dateStart.getDate()) + parseInt(i));
        dateStart.setHours(19, 00, 00);
        var dateEnd = new Date();
        dateEnd.setDate(parseInt(dateEnd.getDate()) + parseInt(i));
        dateEnd.setHours(20, 00, 00);
        i=i+1;
        let newRecord = new EVModel({
            user: req.body.user,
            start: dateStart,
            end: dateEnd,
            title: titl,
            type: typ,
        
        });
        newRecord.save((err, docs) => {
            if(!err) console.log(docs);
            else console.log('error creating new data   : ' +err);
        })

    }
    res.status(201).send();
    //console.log(req.body.evenement);
  
}


module.exports.readRecomUserEvent = async (req, res) => {
    // http://localhost:5500/facturef?fournisseurs=6081b7360b0d8b47807c85f3

    let filter = {};
    if(req.query.user)
    {
         filter = {user: req.query.user.split(','),
                   start: {$gte: moment(req.query.start).toDate() },
                   end: {$lte: moment(req.query.end).toDate()},
         
        }
    }

    const factListe = await EVModel.find(filter);

    if(!factListe) {
        res.status(500).json({success: false})
    } 
    res.send(factListe);

}

module.exports.createEventManuelement = async ( req, res)=>{
    const newRecord = new EVModel({
        user: req.query.user,
        start: req.body.start,
        end: req.body.end,
        title: req.body.title,
        type: req.body.type
    });
  console.log(req.body);
  newRecord.save((err, docs) => {
      if(!err) res.send(docs);
      else console.log('error creating new data   : ' +err);
  })
};



module.exports.deleteEV = (req, res) => {

   
    EVModel.deleteMany({ user: req.params.user },
        (err, docs)=> {
            if (!err) res.send(docs)
            else console.log("update err"+ err);
        }
        )

//});
};





