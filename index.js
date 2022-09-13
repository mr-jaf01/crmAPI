const express = require('express');
const http = require('http');
const AppConfig = require('./utils/config');
const calenderRoutes  = require("./routes/googleCalenderRoute/googleCalendRoute")
 require('./utils/error-handler');
 require("dotenv").config()
class Server {
  constructor() {
    this.app = express();
    this.http = http.Server(this.app);
     
  }
  appConfig() {
    new AppConfig(this.app).loadAppLevelConfig();
  }
  errorConfig() {
    new AppConfig(this.app).loadAppLevelErrorConfig();
  }

  /* Including app Routes starts */
   includeRoutes() {
     new calenderRoutes(this.app).routesConfig()
   }

  /* Including app Routes ends */

  startTheServer() {
    this.appConfig();
    this.includeRoutes();
    this.errorConfig()
    const port = 4000;
    this.app.listen(port, () => {
      console.log(`Listening on http://localhost:${port}`);
    });
  }
}


module.exports = new Server();
