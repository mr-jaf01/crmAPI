const Error = require("./error-handler")
const cors = require('cors');
const express = require("express")
const constant = require("./constant")


class AppConfig {
  constructor(app) {
    this.app = app;
  }



  loadAppLevelErrorConfig() {
    this.app.use(async (req, res, next) => {
     
      const error = new Error(constant.SERVER_NOT_FOUND_HTTP_CODE, req.path + " " + constant.NOT_FOUND)
      next(error)
    })
    this.app.use((err, req, res, next) => {
      res.status(err.statusCode || 500)
      res.json({ status: err.statusCode || 500, message: err.message })
    })
  }

  loadAppLevelConfig() {

    this.app.use(
      express.json(),
    );
    this.app.use(
      cors(),
    );
  }


}
module.exports = AppConfig;
