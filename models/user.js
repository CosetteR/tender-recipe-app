const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type:String,
        required: true,
    },

    tends: [{type: mongoose.Schema.Types.ObjectId, ref: 'Tendies'}]
});

module.exports = mongoose.model('User', userSchema);