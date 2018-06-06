const mongoose = require('mongoose');

var User = mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    email: {
        type:String,
        minlength:1,
        required: true,
        trim: true
  
    }
  });

  module.exports = {User};