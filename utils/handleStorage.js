const multer = require('multer')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const pathStorage = `$(__dirname)/../storage`;
        cb(null, pathStorage)
    },
    filename: function (req, file, cb) {
        //TODO: mi-cv.df mi-foto.png
        const ext = file.originalname.split(".").pop(); //va a devolver ("name", "png")
        const filename = `file-${Date.now()}.${ext}` //devulve nombre de archivo.xx
        cb(null, filename)
    },
});

const uploadMiddleware = multer ({storage})


module.exports = uploadMiddleware;