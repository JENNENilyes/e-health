/*const mongoose = require('mongoose');
mongoose.connect(
    "mongodb://localhost:27017/pcd-api",
    {useNewUrlParser: true  , useCreateIndex: true,useUnifiedTopology:true,useFindAndModify: false,},
    (err)=> {
        if(!err) console.log("Mongodb connected");
        else console.log("connection error :" + err);
    }

)*/
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/summercamp",{
    useNewUrlParser: true  ,
     useCreateIndex: true,
     useUnifiedTopology:true,
     useFindAndModify: false,
})
.then(()=>{
    console.log('data base connection is ready');
})
.catch((err)=>{
    console.log(err);
})