var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://monal:vendfend@cluster0-yzkhe.mongodb.net/Vend');

var Schema = mongoose.Schema;

var interestSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    activity: {
        type: String,
        required: true
    }
});

// export schemas
module.exports = mongoose.model('Interest', interestSchema);