let mongo = require('mongoose');

let userSchema = new mongo.Schema({
    userid: {type:String},
    password: {type:String},
    Bookno:{type:Number,unique:true,required:true},
    Bookname:{type:String},
    usersighn:{type:String}

})

let play = 
 mongo.model('user', userSchema);

module.exports= play;


