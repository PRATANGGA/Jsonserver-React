const jsonServer = require('json-server');
const path = require('path');
const fs = require('fs');

const merge = require('./merge-json.cjs'); // panggil merge sebelum server start
merge(); // hasilkan db.json

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`JSON Server is running at http://localhost:${PORT}`);
});

