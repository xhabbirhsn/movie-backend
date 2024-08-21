const Movie = require('../helpers/mongoSchema/addMovie')

function getMovieList() {
    return new Promise((resolve, reject) => {
        try {
            // const query = { amount: { $exists: true } };
            Movie.find()
                .then(allData => {
                    const amounts = allData.map(item => ({
                        id: item.id,
                        movieName: item.movieName,
                        banner: item.banner,
                        createdAt: item.createdAt
                    }))
                    resolve({
                        status: true,
                        message: "Movies retrieved successfully",
                        data: amounts
                    });
                })
                .catch(error => {
                    console.error('Error retrieving Movies:', error);
                    reject({
                        status: false,
                        message: error.message
                    });
                });
        } catch (error) {
            console.error('Error retrieving Movies:', error);
            reject({
                status: false,
                message: error.message
            });
        }
    });
}

module.exports = getMovieList;
