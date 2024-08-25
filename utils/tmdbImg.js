const axios = require('axios');

async function tmdbImg(imgId) {
    return new Promise(async (resolve, reject) => {
        try {
            const options = {
                method: 'GET',
                url: `https://api.themoviedb.org/3/movie/${imgId}/images?include_image_language=en`,
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYTExMWU1YjBiNDYzY2Q2OWY0OTYxZWMxYTEzOWI3YyIsIm5iZiI6MTcyNDYwODk1My40NTcwMjIsInN1YiI6IjY2YjRhNmYwYWY5YWVlMDE4MjI0MTdkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d5O9NYr0UrPXh7tqy4j8bXvOsWAKqzlfhgzG95CHv2w'
                }
            };
            
            const response = await axios.request(options);
            // console.log(response.data);
            resolve(response.data);
        } catch (error) {
            reject(new Error('Error while generating image: ' + error.message));
        }
    })
}

module.exports = tmdbImg