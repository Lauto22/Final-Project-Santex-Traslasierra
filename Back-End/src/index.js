const dotenv = require('dotenv');
const Server = require("./models/server.model");
// Configuración dotenv
dotenv.config();

const server = new Server();
server.start();
