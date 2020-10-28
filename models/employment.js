const joi = require('joi');
const mongose = require('mongoose');

const empSchema =  new mongose.Schema({
    company:{
        type:String,
        required:true,
        trim:true,
        minlength:5,
        maxlength:50
    },
    location :{
      type: String,
      required:true
    },
    country:{
        type:String,
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
        type: Date
    },
    is_currently:{
        type:Boolean,
        default:false
    },
    description:{
        type: String,
        trim:true,
        min:3,
        max:150
    }

},{timestamps:true});


const Employment = mongose.model('Emps', empSchema);



exports.Employment = Employment;
