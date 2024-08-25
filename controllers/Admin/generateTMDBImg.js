const appRoot = require('app-root-path');
const path = require('path');
const { failureResponse, successResponse } = require(path.join(appRoot.path, '/utils/responseSchema'));
const statusCodes = require(path.join(appRoot.path, '/utils/stausCodes.json'));
const genrateTMDBimgLinks = require('../../logic/Admin/generateTMDBImg');

const genrateTMDBimgLink = async (req, res) => {
    try {
        const imgId = req.body.imgId;
        let result = await genrateTMDBimgLinks(imgId).catch(error => {
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
module.exports = genrateTMDBimgLink