const mongoose = require("mongoose");

const UserSchema= mongoose.Schema({
    name:{type:String},
    test:{type:String}

});
const User= mongoose.model("Usertest",UserSchema);
module.exports=User;