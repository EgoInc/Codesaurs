import axios from "axios";


export default class ApiServices {

    _apiBase  = "https://jsonplaceholder.typicode.com/"
    _apiGetPosts = "https://jsonplaceholder.typicode.com/posts"

    getResource = async (url) => {
        try {
            const res = await axios.get(url)
        }
        catch (error) {
            console.error(error.toJSON())
        }
    }


    getFilteredProducts = async (url) => {
        const res = await this.getResource(this._apiBase + `${url}`)
        return res.items.map((this._transformData));
    }



    _transformData = (data) => {
        return {
            name: data.name,
            image: data.image,
            shortDescription: data.shortDescription,
            level: data.level,
            language: data.language,
            duration: data.duration,
            chips: data.chips,
            price: data.price
        }
    }
}