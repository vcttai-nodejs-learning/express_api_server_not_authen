const Subscriber = require('../models/subscriber');

const getSubscriber = async (req, res, next) => {
    let subscriber = null;

    try {
        subscriber = await Subscriber.findById(req.params.id);
        console.log(subscriber);
        if (subscriber == null){
            return res.status(404).json({ message: 'Can not find subscriber.'});
        }
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.subscriber = subscriber;
    next();
}

module.exports = { getSubscriber };