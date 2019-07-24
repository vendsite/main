var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://monal:Flower123!@cluster0-yzkhe.mongodb.net/Vend');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    activites: [{
        type: String
    }]
});

// export schemas
module.exports = mongoose.model('User', userSchema);