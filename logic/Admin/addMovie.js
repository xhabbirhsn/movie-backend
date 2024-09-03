const Movie = require('../../helpers/mongoSchema/addMovie')

async function addMovies(details) {
    return new Promise(async (resolve, reject) => {
        try {
            console.log("detailsss", details)
            // const savedMovie = await newMovie.save();
            // resolve({ message: 'Movie added successfully', movie: savedMovie });
        } catch (error) {
            throw new Error('Error saving movie: ' + error.message);
        }
    })
}

module.exports = addMovies;