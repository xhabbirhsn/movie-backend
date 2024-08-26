const tmdbImg = require("../../utils/tmdbImg");

async function genrateTMDBimgLink(imgId) {
    return new Promise(async (resolve, reject) => {
        try {
            const imageId = await tmdbImg(imgId);
            const imageUrl = `https://image.tmdb.org/t/p/w500${imageId.poster_path}`;
            const data = {
                poster: imageUrl,
                imageId: imageId.id,
                genres: imageId.genres,
                imdb_id: imageId.imdb_id,
                original_language: imageId.original_language,
                original_title: imageId.original_title,
                overview: imageId.overview,
                release_date: imageId.release_date,
                runtime: imageId.runtime,
            };
            resolve(imageId);
        } catch (error) {
            throw new Error("Error while generating img: " + error.message);
        }
    });
}

module.exports = genrateTMDBimgLink;
