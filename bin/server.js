'use strict';

const app = require('../src/app');
const debug = require('debug')('api:server');
const http = require('http');

const port = normalizePort(process.env.PORT || '3000');

app.set('port', port);

const server = http.createServer(app);

server.listen(port, (req, res, next) => {
   return console.log(`API rodando em http://localhost:${port}`);
});

server.on('error', onError);

server.on('listening', onListening);

function normalizePort(val) {
   const port = parseInt(val, 10);

   if (isNaN(port)) return val;

   if (port >= 0) return port;

   return false;
};

function onError(error) {
   if (error.syscall !== 'listen') throw error;

   const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

   switch (error.code) {
      case 'EACCES':
         console.error(bind + ' não possui privlégio');
         process.exit(1);
         break;

      case 'EADDRINUSE':
         console.error(bind + ' está em uso');
         process.exit(1);
         break;

      default:
         throw error;
   }
};

function onListening() {
   const addr = server.address();
   const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
   debug('Listening on ' + bind);
};