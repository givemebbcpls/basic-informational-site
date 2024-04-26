'use strict';

const logger = require('../util/logger.js');
const code404Controller = require('../controllers/code404.controller.js');
const sendStatic = require('../services/static.service.js');

function contactController(req, res) {
    if (!req.method === 'GET') code404Controller(req, res);
    logger.getRequest(req);
    sendStatic(req, res);
    logger.sendResponse();
}

module.exports = contactController;