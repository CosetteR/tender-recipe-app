const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minLength: 3
    },
    password: {
      type: String,
      required: true,
      minLength: 8
    }, {
      timestamps: true,
    }
});

//need delete and update in real production

const User = mongoose.mode('User', userSchema);

module.exports = User;
