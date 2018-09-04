const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IPSchema = new Schema({
    ip: {
        type: String,
        required: true
    },
    location :{
        lat: {
            type: String,
            required: true
        },
        long : {
            type: String,
            required: true
        }
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

module.exports = IPModel = mongoose.model('IPModel', IPSchema);