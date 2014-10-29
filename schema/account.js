var mongoose = require('mongoose');

exports.accountSchema = new mongoose.Schema({
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
    "primaryUser" : { "type": "string", "ref" : 'users' } ,
    "users" : [ { "type": mongoose.Schema.Types.ObjectId, ref : 'users' } ]
});