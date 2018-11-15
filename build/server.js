'use strict';

var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var fs = require('fs');
var config = require("config");
var port = config.get("server.port") || 3005;
var strEnv = process.env.NODE_ENV || 'dev';
var dbHost = config.get("dbConfig.host");
var mongoose = require('mongoose');
var path = require('path');

var timeout = require('connect-timeout'); //express v4
var indexRoute = require('./routes/indexRoutes');
//parse application/json and look for raw text                                        
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));

app.use(timeout(120000));
app.use(haltOnTimedout);

function haltOnTimedout(req, res, next) {
    if (!req.timedout) next();
}

//db options
var options = {
    server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
};

//db connection only if config contain value 
if (dbHost) {
    mongoose.connect(dbHost, options);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
}

//don't show the log when it is test
if (strEnv !== 'test') {
    //use morgan to log at command line
    var accessLogStream = fs.createWriteStream(path.join(__dirname, '../log/access.log'), { flags: 'a' });
    app.use(morgan('combined', { "stream": accessLogStream }));
}

app.use("/api", indexRoute);

app.listen(port);
console.log("Listening on port " + port + " with env " + strEnv);

module.exports = app; // for testing
//# sourceMappingURL=server.js.map