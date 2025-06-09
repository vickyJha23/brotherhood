import multer from "multer";

// creating the diskStorage engine

const storage = multer.diskStorage({
    destination: (_req, _file, cb) => {
          cb(null, "temp/uploads")
    },
    filename: (_req, file, cb) => {
         const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
         cb(null, file.fieldname + "-" + uniqueSuffix);
    }  
})

const upload = multer({
    storage: storage,
})

export default upload;