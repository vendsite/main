var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://monal:vendfend@cluster0-yzkhe.mongodb.net/Vend');

var Schema = mongoose.Schema;

var userSchema = new Schema({
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
    }
});

// export schemas
module.exports = mongoose.model('User', userSchema);