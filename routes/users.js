var restifyMongoose = require('restify-mongoose');
var mongoose = require('mongoose');
var async = require('async');

module.exports = function(server) {
    var UserModel = mongoose.model('users', require('../schema/user').userSchema);
    var ClassModel = mongoose.model('classes', require('../schema/class').classSchema);

// Expose User using restify
    var users = restifyMongoose(UserModel);
    server.get('/users', users.query());
    server.get('/users/:id', function(req, res) {
        UserModel
            .findById(req.params.id,
            function(err, user) {
                res.header('Content-Type', "application/json");
                res.send(user);
            })
            .populate('enrolledClasses', 'title description date');
    });
    server.post('/users', users.insert());
    server.patch('/users/:id', users.update());
    server.del('/users/:id', users.remove());
    server.post('/users/:id/enroll', function(req, res) {
        var userId = req.params.id;
        var classId = req.query.class;
        async.parallel({
            user: function(callback){
                UserModel
                    .findById(userId,
                    function(err, user){
                        user.enrolledClasses.push(classId);
                        user.save(function(err) {
                            if(err) {
                                callback(err, 'user');
                            } else {
                                callback(null, user);
                            }
                        });
                    });
            },
            classObj: function(callback){
                ClassModel
                    .findById(classId,
                    function(err, classObj) {
                        classObj.enrolledUsers.push(userId);
                        classObj.save(function(err) {
                            if(err) {
                                callback(err, 'class');
                            } else {
                                callback(null, classObj);
                            }
                        });
                    });
            }
        },
        function(err, results){
            if(err) {
                console.log(err.message);
                res.header('Content-Type', "application/json");
                res.send(err.message);
            } else {
                res.header('Content-Type', "application/json");
                res.send(results.user);
            }
        });
    });
};