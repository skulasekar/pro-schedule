var mongoose = require('mongoose');

exports.EmailContact = new mongoose.Schema({
    "id": { "type" : "string" },
    "link": {
        "href" : { "type" : "string"},
        "rel" : { "type" : "string"}
    },
    "emailAddress" : { "type" : "string" },
    "type": { "type" : "string" },
    "isPreferred" : { "type" : "boolean" }
});