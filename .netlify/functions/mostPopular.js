const fetch = require("node-fetch");

const key = process.env.REACT_APP_YOUTUBE_API_KEY
const API_ENDPOINT = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${key}`;

exports.handler = async (event, context) => {
    const requestOption = {
        method: 'GET',
        redirect: 'follow'
    }
    try {
        const response = await fetch(API_ENDPOINT, requestOption)
        const result = await response.json()
        return { statusCode: 200, body: JSON.stringify(result.items) };
    } catch (error) {
        console.log(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed fetching data' }),
        };
    }
};
