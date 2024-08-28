const { tmdbImg, movieCredit } = require("../../utils/tmdbImg");

async function genrateTMDBimgLink(imgId) {
    return new Promise(async (resolve, reject) => {
        try {
            const imageId = await tmdbImg(imgId);
            const credit = await movieCredit(imgId);
            const imageUrl = `https://image.tmdb.org/t/p/w500${imageId.poster_path}`;

            const categorizedActors = {
                actor: [],
                director: [],
            };
            for (let i = 0; i < 5; i++) {
                if (credit.cast[i].known_for_department == "Acting") {
                    categorizedActors.actor.push(credit.cast[i].original_name);
                }
                if (credit.crew[i].known_for_department == "Directing") {
                    categorizedActors.director.push(credit.crew[i].original_name);
                }
            }
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
                hero: categorizedActors
            };
            resolve(data);
        } catch (error) {
            throw new Error("Error while generating img: " + error.message);
        }
    });
}

module.exports = genrateTMDBimgLink;
