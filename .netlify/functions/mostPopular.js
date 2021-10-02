const fetch = require("node-fetch");

const key = process.env.REACT_APP_YOUTUBE_API_KEY
const API_ENDPOINT = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${key}`;

exports.handler = async (event, context) => {

    switch (event.httpMethod) {
        case 'GET':
            console.log('GET request')
            try {
                const response = await fetch(API_ENDPOINT, {
                    method: 'GET',
                    redirect: 'follow'
                })
                const result = await response.json()
                return { statusCode: 200, body: JSON.stringify(result.items) };
            } catch (error) {
                console.log(error);
                return {
                    statusCode: 500,
                    body: JSON.stringify({ error: 'Failed fetching data' }),
                };
            }
        case 'OPTIONS':
            console.log('OPTIONS request')
            const headers = {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
                'Access-Control-Allow-Credentials': true
            };
            return {
                statusCode: 200,
                headers,
                body: 'preflight'
            };
    }

};
