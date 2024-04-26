'use strict';

const logger = require('../util/logger.js');
const sendStatic = require('../services/static.service.js');

function code404Controller(req, res) {
    logger.getRequest(req);
    req.url = '/404';
    sendStatic(req, res);
    logger.sendResponse();
}

module.exports = code404Controller;