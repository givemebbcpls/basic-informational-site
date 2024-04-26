'use strict';

const fs = require('node:fs');

function sendStatic(req, res) {
    let path = `${__dirname}/../static${req.url}.html`;
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) console.log(err);
        res.end(data)
    });
}

module.exports = sendStatic;