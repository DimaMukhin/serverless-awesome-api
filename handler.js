'use strict';

module.exports.hello = async (event, context) => {
    let message = 'Go Serverless v1.0! Your function executed successfully!';

    if (event.queryStringParameters && event.queryStringParameters.name) {
        message = `Hello ${event.queryStringParameters.name}!`;
    }

    return {
        statusCode: 200,
        body: JSON.stringify({
            message,
            input: event,
        }),
    };

    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
