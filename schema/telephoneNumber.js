var mongoose = require('mongoose');

exports.TelephoneNumber = new mongoose.Schema({
    "id": { "type" : "string" },
    "link": {
        "href" : { "type" : "string"},
        "rel" : { "type" : "string"}
    },
    "number" : { "type" : "string" },
    "extension": { "type": "string" },
    "type": { "type" : "string" }
});