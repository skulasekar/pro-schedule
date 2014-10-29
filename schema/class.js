var mongoose = require('mongoose');

exports.classSchema = new mongoose.Schema({
    "id": { "type": "string" },
    "link": {
        "href": { "type": "string", "required": false },
        "rel": { "type": "string", "required": false }
    },
    "title": { "type" : "string", "required" : true, "default" : "New Class"},
    "description" : { "type" : "string", "required" : true, "default" : "New Class Description" },
    "date" : { "type" : "Date", "required" : true, "default" : Date.now },
    "maxCapacity": { "type": "number", "required" : true },
    "enrolledUsers" : [ { "type": mongoose.Schema.Types.ObjectId, ref : 'users' } ],
    "notes" : [ { "type": mongoose.Schema.Types.ObjectId, ref : 'notes' } ]
});