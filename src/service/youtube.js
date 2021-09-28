import axios from 'axios'


class Youtube {
    constructor(key) {
        this.youtube = axios.create({
            baseURL: `https://youtube.googleapis.com/youtube/v3`,
            params: { key: key },
        })
    }

    async mostPopular() {
        const response = await this.youtube.get('videos', {
            params: {
                part: 'snippet',
                chart: 'mostPopular',
                maxResults: 25,
            }
        })
        return response.data.items

        // const response = await fetch(
        //     `/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
        //     this.getRequestOptions)
        // const result = await response.json()
        // return result.items

    }

    async search(query) {
        const response = await this.youtube.get('videos', {
            params: {
                part: 'snippet',
                maxResults: 25,
                type: 'video',
                q: query,

            }
        })
        return response.data.items.map((item => ({ ...item, id: item.id.videoId })))

        // const response = await fetch(
        //     `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&q=${query}&key=${this.key}`, this.getRequestOptions)
        // const result = await response.json()
        // const items = result.items.map(item => ({ ...item, id: item.id.videoId }))
        // return items

    }

}

export default Youtube