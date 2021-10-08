//const express = require('express');
//const router = express.Router();
const asyncHandler =require('express-async-handler');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const ClientModel = require('../models/LoginModel');
const clientModel = require('../models/LoginModel');


const ObjectID = require('mongoose').Types.ObjectId;

const maxAge = 3 * 24 * 60 * 60 * 1000;





//get client
module.exports.readClient = (req, res) => {
    ClientModel.find((err, docs) => {
        if(!err) res.send(docs);
        else console.log("Error to get data :  " + err);
    }).select('email ')
}


//router.post('/',(req,res)=>{
module.exports.createClient = (req, res) => {
     let newRecord = new clientModel({
      username: req.body.username,
        email: req.body.email,
        passwordHash: bcrypt.hashSync(req.body.password,10),
        test:  req.body.test,
        avatar: req.body.avatar


    });
    newRecord.save((err, docs) => {
        if(!err) res.send(docs);
        else console.log('error creating new data   : ' +err);
    })
}



//register
module.exports.RegisterClient = (req, res) => {
    let newRecord = new clientModel({
      username: req.body.username,
       email: req.body.email,
       passwordHash: bcrypt.hashSync(req.body.password,10),
       test: req.body.test,
       avatar: req.body.avatar

   });
   newRecord.save((err, docs) => {
       if(!err) res.send(docs);
       else console.log('error creating new data   : ' +err);
   })
}


//login
module.exports.loginClient = asyncHandler(async (req,res) => {
    const client = await ClientModel.findOne({email: req.body.email})
    const secret = process.env.secret ;
    if(!client) {
        return res.send({error:('The client not found') });
    }
    if(client && bcrypt.compareSync(req.body.password, client.passwordHash)) {
        const token = jwt.sign(
            {
                clientId: client._id,
            },
            "secret007"
            //{expiresIn : '1d'}
        )
        res.cookie('jwt', token, { httpOnly: true, maxAge});
        res.status(200).send({client: client.email , token: token}) 
    } else {
       res.send({error:('Incorrect password!') });
    }

    
})


module.exports.logout = (req, res) => {
  res.cookie('jwt', '', { maxAge: 1 });
  res.redirect('/');
}

module.exports.userInfo = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

    ClientModel.findById(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("ID unknown : " + err);
  }).select("-password");
};


module.exports.updateAvatar = async (req, res) => {

  if (!ObjectID.isValid(req.body._id))
    return res.status(400).send("ID unkown :" + req.body._id)
  
  const avatar=req.body.avatar
  console.log(avatar);
  console.log(req.body._id);

  const updateRecord = {

    avatar: avatar,

  } ;



  ClientModel.findByIdAndUpdate(
      req.body._id,
      {$set: updateRecord},
      {new:true},
      (err, docs)=> {
          if (!err) res.send(docs)
          else console.log("update err"+ err);
      }
  )
  
}

module.exports.updateType = async (req, res) => {

  if (!ObjectID.isValid(req.body._id))
    return res.status(400).send("ID unkown :" + req.body._id)
  
  const test=req.body.test
  console.log(test);
  console.log(req.body._id);

  const updateRecord = {

    test: test,

  } ;



  ClientModel.findByIdAndUpdate(
      req.body._id,
      {$set: updateRecord},
      {new:true},
      (err, docs)=> {
          if (!err) res.send(docs)
          else console.log("update err"+ err);
      }
  )
  
}








/*const bcrypt = require('bcrypt');
const express = require('express');
//const SignUpModels = require('../models/SignUpModels');
const router = express.Router();
const signUpTemplateCopy = require('../models/SignUpModel');
const jwt = require('jsonwebtoken');


module.exports.signUp = async (request, response) =>{
    const password = request.body.password;
    const hashed = bcrypt.hashSync(password, 12);
    
    console.log('hashed password',hashed);
    const signedUpUser = new signUpTemplateCopy({
        
        username: request.body.username,
        email: request.body.email,
        password: hashed
    })
    

    signedUpUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)

    })
}

module.exports.login = async  (req, res, next) => {
    signUpTemplateCopy.findOne({ email: req.body.email }).then(
      (user) => {
        if (!user) {
          return res.status(402).json({
            error: new Error('User not found!')
          });
        }
        bcrypt.compare(req.body.password, user.password).then(
          (valid) => {
            if (!valid) {
              return res.status(401).json({
                error: new Error('Incorrect password!')
              });
            }
            const token = jwt.sign(
                { userId: user._id },
                'RANDOM_TOKEN_SECRET',
                { expiresIn: '24h' });
              res.status(200).json({
                userId: user._id,
                token: token
              });
          }
        ).catch(
          (error) => {
            res.status(500).json({
              error: error
            });
          }
        );
      }
    ).catch(
      (error) => {
        res.status(500).json({
          error: error
        });
      }
    );
  };

  module.exports.readClient = (req, res) => {
    signUpTemplateCopy.find((err, docs) => {
        if(!err) res.send(docs);
        else console.log("Error to get data :  " + err);
    })
}
*/
