const DotEnv = require('dotenv');

DotEnv.config({ path: './.env' });

const Server = require('./index');

Server.startTheServer();
