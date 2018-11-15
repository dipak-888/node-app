
var path = require('path');
var fs = require('fs');
let filePath =  path.join(__dirname, '../../public/data.txt');

function getFileData(req, res) {
    readFileData(filePath).then((data) => {
        res.send({filedata : data});
    }).catch((err) => {
        res.send({message: "Something went worng!!"});
    });
}

function storeFileData(req, res) {
    let body = req.body;
    fs.appendFile(filePath, body.data, function(err, data) {
        if(err) {
            res.send({message : "Something went wrong!!"});    
        }

        readFileData(filePath).then((data) => {
            res.send({filedata : data, postData: body.data});
        }).catch((err) => {
            res.send({message: "Something went worng!!"});
        });
    });
}

function readFileData(filePath) {
    return new Promise((resolve, reject) => {
        if(filePath) {
            fs.readFile(filePath, 'utf8', (err, data) => {
                if(err) {
                    reject(null);
                }
                resolve(data);    
            });
        } else {
            reject(null);
        }
    });
}


module.exports = {getFileData, storeFileData};