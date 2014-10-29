var mongoose = require('mongoose');

exports.notesSchema = new mongoose.Schema({
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
    "notes": {
        "type": "string",
        "required": true
    },
    "user" : { "type": "string", "ref" : 'users', "required" : true }
});