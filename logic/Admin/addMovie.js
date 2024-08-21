const Movie = require('../../helpers/mongoSchema/addMovie')

async function addMovies(movieName, bannerPath) {
    return new Promise(async (resolve, reject) => {
        const newMovie = new Movie({
            movieName: movieName,
            banner: bannerPath
        });
    
        try {
            const savedMovie = await newMovie.save();
            resolve({ message: 'Movie added successfully', movie: savedMovie });
        } catch (error) {
            throw new Error('Error saving movie: ' + error.message);
        }
    })
}

module.exports = addMovies;