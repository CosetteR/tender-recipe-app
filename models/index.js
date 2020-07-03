const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/tender');

module.exports.User = require('./user');
module.exports.Tendies = require('./tendies');