// import multer from "multer";

// const storage = multer.memoryStorage();
// export const singleUpload = multer({storage}).single("file");

// import multer from "multer";

// const storage = multer.memoryStorage();
// export const singleUpload = multer({
//     storage,
//     fileFilter: (req, file, cb) => {
//         const filetypes = /jpeg|jpg|png|pdf/;
//         const mimetype = filetypes.test(file.mimetype);
//         const extname = filetypes.test(file.originalname.split('.').pop());
//         if (mimetype && extname) {
//             return cb(null, true);
//         }
//         cb("Error: File upload only supports the following filetypes - " + filetypes);
//     }
// }).single("file");


import multer from "multer";

const storage = multer.memoryStorage();

export const singleUpload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png|pdf/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(file.originalname.split('.').pop());
        if (mimetype && extname) {
            return cb(null, true);
        }
        cb(new Error("File upload only supports JPEG, JPG, PNG, or PDF formats"));
    }
}).single("file");
