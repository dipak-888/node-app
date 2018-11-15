'use strict';

var path = require('path');
var fs = require('fs');
var filePath = path.join(__dirname, '../../public/data.txt');

function getFileData(req, res) {
    readFileData(filePath).then(function (data) {
        res.send({ filedata: data });
    }).catch(function (err) {
        res.send({ message: "Something went worng!!" });
    });
}

function storeFileData(req, res) {
    var body = req.body;
    fs.appendFile(filePath, body.data, function (err, data) {
        if (err) {
            res.send({ message: "Something went wrong!!" });
        }

        readFileData(filePath).then(function (data) {
            res.send({ filedata: data, postData: body.data });
        }).catch(function (err) {
            res.send({ message: "Something went worng!!" });
        });
    });
}

function readFileData(filePath) {
    return new Promise(function (resolve, reject) {
        if (filePath) {
            fs.readFile(filePath, 'utf8', function (err, data) {
                if (err) {
                    reject(null);
                }
                resolve(data);
            });
        } else {
            reject(null);
        }
    });
}

module.exports = { getFileData: getFileData, storeFileData: storeFileData };
//# sourceMappingURL=FileController.js.map