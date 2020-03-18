
var parseString = require('react-native-xml2js').parseString;

export const get_request = async () => {
    await fetch("http://skillzycp.com/api/UserApi/getOneOccasion/389/0")
        .then(response => response.text())
        .then(result => console.log('yyyyyyyyyyyyyyyyy', result))
        .catch(error => console.log('error', error));
}





export const get_request = async () => {

    await fetch(`http://skillzycp.com/api/UserApi/getOneOccasion/389/0`)
        .then(response => response.text())
        .then((response) => {
            parseString(response, function (err, result) {
                console.log('reseeee', response )
            });
        }).catch((err) => {
            console.log('fetch', err)
        })
}

