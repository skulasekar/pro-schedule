var restifyMongoose = require('restify-mongoose');
var mongoose = require('mongoose');

module.exports = function(server) {
    var NotesModel = mongoose.model('notes', require('../schema/notes').notesSchema);
    // Expose notes using restify
    restifyMongoose(NotesModel).serve('/notes', server);
};