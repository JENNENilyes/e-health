const ObjectID = require('mongoose').Types.ObjectId;
var mongoose = require('mongoose');

const  Event  = require('../models/eventModel');
const moment = require('moment');

/*module.exports.createCalender = async ( req, res)=>{
    const event=Event(req.body);
    console.log(req.body);
    await event.save();
    res.sendStatus(201);
}; */
module.exports.createCalender = async ( req, res)=>{
      const newRecord = new Event({
        title: req.body.title,
        start: req.body.start,
       // localisation: req.body.extendedProps["localisation"],
        end: req.body.end,
        
    });
    console.log(req.body);
    newRecord.save((err, docs) => {
        if(!err) res.send(docs);
        else console.log('error creating new data   : ' +err);
    })
};
module.exports.readCalender = async (req,res)=> {
    const events = await Event.find({
        start: {$gte: moment(req.query.start).toDate() },
        end: {$lte: moment(req.query.end).toDate()},

    });
    res.send(events);
};
//http://localhost:3002/calendar/get-event?start=2021-07-31T23:00:00.000Z&end=2021-09-11T23:00:00.000Z

