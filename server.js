const merge = require('./merge-json.cjs');
const jsonServer = require('json-server');
const path = require('path');

merge(); // update db.json tiap run

const server = jsonServer.create();
server.use(jsonServer.defaults());
const router = jsonServer.router(path.join(__dirname, 'db.json'));
server.use(router);

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => console.log(`JSON Server di port ${PORT}`));

