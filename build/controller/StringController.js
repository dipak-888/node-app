"use strict";

function getFirstNonRepeatChar(req, res) {
    var inputString = req.query.string;
    if (!inputString) {
        var response = { message: "Query string param is required" };
        res.send(response);
    }

    firstNonRepeatedCharacter(inputString).then(function (data) {
        var response = { message: "First non repeat char is => " + data };
        res.send(response);
    }).catch(function (err) {
        var response = { message: "No non repeat char in given string." };
        res.send(response);
    });
}

function firstNonRepeatedCharacter(string) {
    return new Promise(function (resolve, reject) {
        for (var i = 0; i < string.length; i++) {
            var c = string[i];
            if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
                resolve(c);
            }
        }

        reject(null);
    });
}

//export all the functions
module.exports = { getFirstNonRepeatChar: getFirstNonRepeatChar };
//# sourceMappingURL=StringController.js.map