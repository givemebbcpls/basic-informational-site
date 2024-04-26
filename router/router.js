'use strict';

const mainController = require('../controllers/main.controller.js');
const contactController = require('../controllers/contact.controller.js');
const aboutController = require('../controllers/about.controller.js');
const code404Controller = require('../controllers/code404.controller.js');

function routeRequest(req, res) {
    // const url = new URL(req.url, `http://${req.headers.host}`);

    switch (req.url) {
        case '/':
            mainController(req, res);
            break;

        case '/contact':
            contactController(req, res);
            break;

        case '/about':
            aboutController(req, res);
            break;

        default:
            code404Controller(req, res);
    }
}

module.exports = routeRequest;