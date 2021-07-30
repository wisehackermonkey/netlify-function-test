// function that decodes base64 strings
const blns = require('blns');

exports.handler = async (event, context) => {

    return {
        statusCode: 200,
        body: JSON.stringify({ data: blns })
    }
}