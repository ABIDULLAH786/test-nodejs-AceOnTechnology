const express = require('express');
const path = require('path');
const readFileAsync = require('../utils/readFileAsync');

const router = express.Router();

router.route('/api/v1/read-file').get((req, res) => {
    try {
        const txtFilePath = path.join(__dirname, '../utils', 'test.txt');
        readFileAsync(txtFilePath)
            .then((fileContents) => {
                return res.status(201).json({ message: "File contents", content: fileContents });
            })
            .catch((err) => {
                return res.status(404).json({ error: true, message: "Error reading file" });
            });

    } catch (err) {
        res.status(500).send({ message: "Internal Server Error" });
    }
})

module.exports = router;