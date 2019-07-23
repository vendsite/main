var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://monal:Flower123!@cluster0-yzkhe.mongodb.net/Vend');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    activites: [{
        type: String
    }]
});

// export schemas
module.exports = mongoose.model('User', userSchema);