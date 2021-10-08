const express =require('express');
const app=express();
const cors = require('cors');
require('./models/dbConfig');
require('dotenv/config');
const cookieParser = require('cookie-parser');

/*
const authJwt = require('./middleware/jwt');
const errorHandler = require('./middleware/error-handler');
 */

//app.use(cors());
app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:3002', 'http://localhost:8080', 'http://localhost:4200'],
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
}))
//app.options('*',cors());



//middleware
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
//app.use(authJwt());
//app.use(errorHandler);

const jwt = require('./middleware/jwt');
// jwt
app.get('*', jwt.checkUser);
app.get('/jwtid', jwt.requireAuth, (req, res) => {
  res.status(200).send(res.locals.user._id)
});

//app.use(express.json()); 
// import routes        
const calendarRoute = require('./routes/calendarRoute');
const userRoute = require('./routes/userRouter');
//const recomRoute = require('./routes/RecomRoute');
const evenementRoute = require('./routes/EvenementRoute');
const EVRoute = require('./routes/EVRoute');
const Login = require('./routes/loginRoute');






app.use('/calendar',calendarRoute);
app.use('/user',userRoute);
//app.use('/recom',recomRoute);
app.use('/evenement',evenementRoute);
app.use('/EV',EVRoute);
app.use('/',Login);






app.listen(3002, () => console.log('serveur started: 3002'));
