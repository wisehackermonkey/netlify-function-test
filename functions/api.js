exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            envs: {
                BELENA_DEVICE_URL: process.env.BELENA_DEVICE_URL,
                ENVIRONMENT: process.env.ENVIRONMENT,
            }
        }),
    }
}