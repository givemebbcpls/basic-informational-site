'use strict';

const http = require('node:http');
const routeRequest = require('./router/router.js');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

const main = () => {
    const server = http.createServer();

    server.on('request', routeRequest);

    server.listen(PORT, HOST, () => console.log(
        `Server is listening on port ${PORT}.`
    ));
}

main();