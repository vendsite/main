var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://monal:vendfend@cluster0-yzkhe.mongodb.net/Vend');

var Schema = mongoose.Schema;

var serviceSchema = new Schema({
    // name: {
    //     type: String,
    //     required: true
    // },
    // provider: {
    //     type: String,
    //     required: true
    // },
    // image: {
    //     type: String,
    //     required: true
    // },
    keywords: {
        type: [{
            type: String
        }]
    },
    description: {
        type: String,
        required: true
    },
    rate: {
        type: Number,
        required: true
    },
});

// export schemas
module.exports = mongoose.model('Service', serviceSchema);