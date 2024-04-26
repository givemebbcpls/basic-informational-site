'use strict';

function getRequest(req) {console.log(`${req.method} ${req.url} request`)};
function sendResponse() {console.log('response sent')};

module.exports = {
    getRequest,
    sendResponse,
}