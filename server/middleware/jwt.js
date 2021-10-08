const expressJwt = require('express-jwt');
const jwt = require('jsonwebtoken');
const asyncHandler =require('express-async-handler');
const ClientModel = require('../models/LoginModel');

/*function authJwt() {
    const secret = process.env.secret;
    return expressJwt({
        secret,
        algorithms: ['HS256'],
        isRevoked: isRevoked
    }).unless({
        path: [
          //  {url: /\/api\/v1\/products(.*)/ , methods: ['GET', 'OPTIONS'] },
           // {url: /\/api\/v1\/categories(.*)/ , methods: ['GET', 'OPTIONS'] },
            `/client/login`,
            `/client/register`,
        ]
    })
}

async function isRevoked(req, payload, done) {
    if(!payload.isAdmin) {
        done(null, true)
    }

    done();
}*/
module.exports.authJwt = asyncHandler(async (req, res, next) => {
    let token
  
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      try { 
        token = req.headers.authorization.split(' ')[1]
  
        const decoded = jwt.verify(token, process.env.secret)
  
        req.clien = await ClientModel.findById(decoded.clientId).select('-password')
  
        next()
      } catch (error) {
        console.error(error)
        res.status(401).send('Not authorized, token failed')
      }
    }
  
    if (!token) {
      res.status(401).send('Not authorized, no token')
    }
  })





  module.exports.admin = asyncHandler(async(req, res, next) => {
    if (req.clien ) {
     //  console.log(req.clien)
      next()
    } else {
    
      res.status(401).send('Not authorized as an admin')
    }
  })

  module.exports.requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
      jwt.verify(token, "secret007", async (err, decodedToken) => {
        if (err) {
          console.log(err);
          res.send(200).json('no token')
        } else {
          console.log(decodedToken.clientId);
          next();
        }
      });
    } else {
      console.log('No token');
    }
  };
  
  module.exports.checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
      jwt.verify(token, "secret007", async (err, decodedToken) => {
        if (err) {
          res.locals.user = null;
          res.cookie("jwt", "", { maxAge: 1 });
          next();
        } else {
          let user = await ClientModel.findById(decodedToken.clientId);
          res.locals.user = user;
          next();
        }
      });
    } else {
      res.locals.user = null;
      next();
    }
  };
