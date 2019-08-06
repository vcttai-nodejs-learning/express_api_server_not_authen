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
const collection_name = { collection: 'subscribers' };

const subscriberSchema = new mongoose.Schema(document_describe, collection_name);

module.exports = mongoose.model('Subscriber', subscriberSchema);