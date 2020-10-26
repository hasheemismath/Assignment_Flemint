const joi = require('joi');
const mongose = require('mongoose');

const userSchema =  new mongose.Schema({
    company:{
        type:String,
        required:true,
        trim:true,
        minlength:5,
        maxlength:50
    },
    location :{
      type: String,
      enum : ["United state","Italy","India","Srilanka"],
      required:true
    },
    title:{
        type: String,
        required:true,
        trim:true,
        minlength: 5,
        maxlength: 55,
    },
    period:{
      type: Date,
      required:true
    },
    through:{
        type: Date,
        required:true
    },
    description:{
        type: String,
        trim:true,
        min:3,
        max:150
    }

},{timestamps:true});


const User = mongose.model('User', userSchema);

function validateUser(user) {
    const schema = {
        company: joi.string().min(5).max(50).required(),
        title: joi.string().min(5).max(50).required(),
        description:joi.string().min(10).max(50).required(),
        location:joi.string().required(),
        period:joi.date().required(),
        through:joi.date().required()
    };

    return joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;
