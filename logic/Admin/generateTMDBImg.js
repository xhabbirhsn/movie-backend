const tmdbImg = require('../../utils/tmdbImg')

async function genrateTMDBimgLink(imgId) {
    return new Promise(async (resolve, reject) => {
        try {
            const imageId = await tmdbImg(imgId)
            let filePath = null
            imageId.posters.forEach((item) => {
                if(item.aspect_ratio == '0.6667'){
                    filePath = item.file_path
                    return
                }
                // filePath = (item.aspect_ratio === '0.666' || item.aspect_ratio === '0.667') ? item.file_path : filePath;
            })
            for(let i=0; i<imageId.posters.lenth; i++){
                if(imageId.posters[i].aspect_ratio == '0.6667'){
                    filePath = imageId.posters[i].file_path
                    return
                }
            }
            let imageURl = `https://image.tmdb.org/t/p/w500${filePath}`
            console.log("IImage url", imageURl)
            resolve(imageURl)
        } catch (error) {
            throw new Error('Error while generating img: ' + error.message);
        }
    })
}

module.exports = genrateTMDBimgLink;