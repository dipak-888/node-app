
function getFirstNonRepeatChar(req, res) {
    let inputString = req.query.string;
    if(!inputString) {
        let response = {message: "Query string param is required"};
        res.send(response);
    }

    firstNonRepeatedCharacter(inputString).then((data) => {
        let response = {message: "First non repeat char is => " + data};
        res.send(response);
    }).catch((err) => {
        let response = {message: "No non repeat char in given string."};
        res.send(response);
    });
}

function firstNonRepeatedCharacter(string) {
    return new Promise((resolve, reject) => {
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
module.exports = { getFirstNonRepeatChar};