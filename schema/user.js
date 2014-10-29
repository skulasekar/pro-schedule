var mongoose = require('mongoose');

exports.userSchema = new mongoose.Schema({
    "id": { "type": "string" },
    "link": {
        "href": {
            "type": "string",
            "required": false
        },
        "rel": {
            "type": "string",
            "required": false
        }
    },
    "username": {
        "type": "string",
        "required": true
    },
    "name": {
        "type": "string",
        "required": true
    },
    "status": {
        "type": "string",
        "required": false
    },
    "profile" : {
        "id": { "type" : "string" },
        "link": {
            "href": { "type" : "string", "required" : false },
            "rel": { "type" : "string" }
        }
    },
    "contactPhones" : [ require('./telephoneNumber').TelephoneNumber ],
    "contactEmails" : [ require('./emailContact').EmailContact ],
    "enrolledClasses" : [ { "type": mongoose.Schema.Types.ObjectId, ref : 'classes' } ]
});

exports.userSummarySchema = {
    "id": { "type": "string" },
    "link": {
        "href": {
            "type": "string",
            "required": true
        },
        "rel": {
            "type": "string",
            "required": false
        }
    },
    "username": {
        "type": "string",
        "required": false
    },
    "name": {
        "type": "string",
        "required": false
    },
    "status": {
        "type": "string",
        "required": false
    }
}