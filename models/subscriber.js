const mongoose = require('mongoose');

const document_describe = {
    name: {
        type: String,
        required: true
    },
    subscribedChannel: {
        type: String,
        required: true
    },
    subscribeDate: {
        type: Date,
        required: true,
        default: Date.now
    }
};

const subscriberSchema = new mongoose.Schema(document_describe);

module.exports = mongoose.model('Subscriber', subscriberSchema);