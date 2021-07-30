// this is my first function example

//netlify function handler
// module.handler = async (event, context) => {
//     return {
//         statusCode: 200,
//         body: "hi"//JSON.stringify({message: 'Hello from Javascript!'})
//     }
// }
var fetch = require('node-fetch');
var dotenv = require( 'dotenv' );
var process = require('process');
dotenv.config();

// // grab bale device api endpoint from env
DEVICES_ENDPOINT  = process.env.BELENA_DEVICE_URL || "https://api.balena-cloud.com/v5/device";

// // setup authorization
headers = {
    'Authorization': `Bearer ${process.env.API_KEY}`,
    'Content-Type': 'application/json'
}
options = {
    headers: headers

}
// //handel requests
exports.handler = async function(event, context) {

    devices = await(await fetch(DEVICES_ENDPOINT,options)).json()
    device_results_filtered = devices["d"].map((device) => { return {
        uuid: device.uuid,
        is_online: device.is_online, 
        api_heartbeat_state: device.api_heartbeat_state, 
        device_name: device.device_name,
        last_connectivity_event: device.last_connectivity_event
    }})

    return {
        statusCode: 200,
        body: JSON.stringify({"structured":device_results_filtered})
    };
}