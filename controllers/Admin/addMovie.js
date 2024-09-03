const appRoot = require("app-root-path");
const path = require("path");
const { failureResponse, successResponse } = require(path.join(
    appRoot.path,
    "/utils/responseSchema"
));
const statusCodes = require(path.join(appRoot.path, "/utils/stausCodes.json"));
const addMovies = require("../../logic/Admin/addMovie");

const addMovie = async (req, res) => {
    try {
        const details = {
            imgId: req.body.imgId,
            generateLink: req.body.generateLink,
            movieHeading: req.body.movieHeading,
            selectedDate: req.body.selectedDate,
            description: req.body.description,
            aboutSite: req.body.aboutSite,
            title: req.body.title,
            genres: req.body.genres,
            releaseDate: req.body.releaseDate,
            rating: req.body.rating,
            overview: req.body.overview,
            director: req.body.director,
            actor: req.body.actor,
            movieAndQualityDes: req.body.movieAndQualityDes,
            movieName: req.body.movieName,
            duration: req.body.duration,
            language: req.body.language,
            subtitles: req.body.subtitles,
            size: req.body.size,
            quality: req.body.quality,
            format: req.body.format,
            urls: req.body.urls,
            entries: req.body.entries
          };
          

        let result = await addMovies(details).catch((error) => {
            let failure = failureResponse(
                statusCodes.BAD_REQUEST.status,
                error,
                statusCodes.BAD_REQUEST.statusCode
            );
            res.status(failure.statusCode).send(failure.body);
        });
        if (result) {
            let success = successResponse(result, statusCodes.OK.statusCode);
            res.status(success.statusCode).send(success.body);
        }
    } catch (error) {
        console.log(error);
        let failure = failureResponse(
            statusCodes.INTERNAL_SERVER_ERROR.status,
            error.message,
            statusCodes.INTERNAL_SERVER_ERROR.statusCode
        );
        res.status(failure.statusCode).send(failure.body);
    }
};
module.exports = addMovie;
