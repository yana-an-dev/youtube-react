import axios from 'axios'

class Youtube {
    constructor(key) {
        this.youtube = axios.create({
            baseURL: `https://yanatube-react.netlify.app/.netlify/functions/`
        })
    }

    async mostPopular() {
        const response = await this.youtube.get('mostPopular')
        return response.data
    }

    async search(query) {
        const response = await this.youtube.get('videos', {
            params: {
                q: query
            }
        })
        return response.data.map((item => ({ ...item, id: item.id.videoId })))
    }
}

export default Youtube