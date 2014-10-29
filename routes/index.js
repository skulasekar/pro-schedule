var userRoutes = require('./users'),
    notesRoutes = require('./notes'),
    classRoutes = require('./classes');

module.exports.init = function(server) {
    userRoutes(server);
    notesRoutes(server);
    classRoutes(server);
};