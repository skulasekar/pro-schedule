var restify = require('restify'),
    mongoose = require('mongoose'),
    routes = require('./routes')

mongoose.connect('mongodb://localhost:27017/classes');

var server = restify.createServer({
    name: 'restify.mongoose.examples.notes',
    version: '1.0.0'
});

server.use(restify.acceptParser(server.acceptable))
    .use(restify.queryParser())
    .use(restify.bodyParser());

// routes Init
routes.init(server);

server.listen(3000, function () {
    console.log('%s listening at %s', server.name, server.url);
});