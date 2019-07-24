var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://monal:vendfend@cluster0-yzkhe.mongodb.net/Vend');

var Schema = mongoose.Schema;

var paymentSchema = new Schema({
    activity: {
        type: String,
        required: true
    },
    provider: {
        type: String,
        required: true
    },
    customer: {
        type: String,
        required: true
    },
    purchaseDate: {
        type: String,
        required: true
    }
});

// export schemas
module.exports = mongoose.model('Payment', paymentSchema);