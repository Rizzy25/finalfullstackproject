'use strict';

var mongoose = require('mongoose');

var eblastSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String
});

var model = mongoose.model('NewsLetter', eblastSchema);

module.exports = model;