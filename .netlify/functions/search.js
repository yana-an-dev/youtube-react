const fetch = require("node-fetch");

const key = process.env.REACT_APP_YOUTUBE_API_KEY

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    'Access-Control-Allow-Credentials': true
};

exports.handler = async (event, context) => {
    console.log(JSON.stringify(event))
    switch (event.httpMethod) {
        case 'GET':
            console.log('GET request')
            console.log(JSON.stringify(event.queryStringParameters))
            const API_ENDPOINT = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${event.queryStringParameters.q}&maxResults=25&key=${key}`;
            try {
                const response = await fetch(API_ENDPOINT, {
                    method: 'GET',
                    redirect: 'follow'
                })
                const result = await response.json()
                return { statusCode: 200, body: JSON.stringify(result.items), headers: corsHeaders };
            } catch (error) {
                console.log(error);
                return {
                    statusCode: 500,
                    body: JSON.stringify({ error: 'Failed fetching data' }),
                    headers: corsHeaders
                };
            }
        case 'OPTIONS':
            console.log('OPTIONS request')
            return {
                statusCode: 200,
                headers: corsHeaders,
                body: 'preflight'
            };
    }

};
