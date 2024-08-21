const appRoot = require('app-root-path');
const path = require('path');
const { failureResponse, successResponse } = require(path.join(appRoot.path, '/utils/responseSchema'));
const statusCodes = require(path.join(appRoot.path, '/utils/stausCodes.json'));
const addMovies = require('../../logic/Admin/addMovie');

const addMovie = async (req, res) => {
    try {
        const movieName = req.body.name;
        const banner = req.body.banner;
        let result = await addMovies(movieName, banner).catch(error => {
            let failure = failureResponse(statusCodes.BAD_REQUEST.status, error, statusCodes.BAD_REQUEST.statusCode)
            res.status(failure.statusCode).send(failure.body)
        })
        if (result) {
            let success = successResponse(result, statusCodes.OK.statusCode)
            res.status(success.statusCode).send(success.body)
        }

    } catch (error) {
        console.log(error)
        let failure = failureResponse(statusCodes.INTERNAL_SERVER_ERROR.status, error.message, statusCodes.INTERNAL_SERVER_ERROR.statusCode)
        res.status(failure.statusCode).send(failure.body)
    }
}
module.exports = addMovie