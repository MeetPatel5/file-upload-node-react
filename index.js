const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const app = express();

const PORT = process.env.PORT || 5555;

app.use(bodyParser.json());

// Optional (only use when we need control over file that we're uploading)
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "upload");
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const singleUpload = multer({ storage: storage }).single("file");
const multipleUpload = multer({ storage: storage }).array("file");

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "POST,GET,PUT,DELETE,OPTIONS"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization"
    );
    if (req.method === "OPTIONS") {
        return res.sendStatus(200);
    }
    next();
});

app.post("/single-upload", (req, res) => {
    singleUpload(req, res, err => {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err);
        } else if (err) {
            return res.status(500).json(err);
        }
        return res.status(200).json(req.file);
    });
});

app.post("/multi-upload", (req, res) => {
    console.log("aai la bahu badhi files, handle krje")
    multipleUpload(req, res, err => {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err);
        } else if (err) {
            return res.status(500).json(err);
        }
        return res.status(200).json(req.file);
    });
});

app.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
});
