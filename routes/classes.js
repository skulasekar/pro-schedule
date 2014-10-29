var restifyMongoose = require('restify-mongoose');
var mongoose = require('mongoose');

module.exports = function(server) {

    var ClassModel = mongoose.model('classes', require('../schema/class').classSchema);

// Now create a restify-mongoose resource from 'Class' mongoose model
    var classes = restifyMongoose(ClassModel);
    server.get('/classes', classes.query());
    server.get('/classes/:id', function(req, res) {
        ClassModel
            .findById(req.params.id,
            function(err, schedule) {
                res.header('Content-Type', "application/json");
                res.send(schedule);
            })
            .populate('enrolledUsers', 'name username');
    });
    server.post('/classes', classes.insert());
    server.patch('/classes/:id', classes.update());
    server.del('/classes/:id', classes.remove());

};