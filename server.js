const merge = require("./merge-json.cjs"); // menggabungkan file JSON menjadi db.json
const jsonServer = require("json-server"); // framework REST API dari file JSON
const path = require("path");

merge(); // jalankan merge setiap server start

const server = jsonServer.create(); // buat server
server.use(jsonServer.defaults()); // middleware bawaan (CORS, logger, dsb.)
const router = jsonServer.router(path.join(__dirname, "db.json")); // baca db.json hasil merge
server.use(router); // gunakan router json-server

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => console.log(`JSON Server di port ${PORT}`));
