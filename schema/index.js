var emailDef = require('./emailContact'),
    telephoneNumberDef = require('./telephoneNumber'),
    userDef = require('./user'),
    scheduleDef = require('./schedule'),
    mongoose = require('mongoose');

exports.UserSchema = new mongoose.Schema(userDef.userSchema);

exports.TelephoneNumberSchema = new mongoose.Schema(telephoneNumberDef.TelephoneNumber);

exports.EmailContactSchema = new mongoose.Schema(emailDef.EmailContact);

exports.ScheduleSchema = new moongoose.Schema()