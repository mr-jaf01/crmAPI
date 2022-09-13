const CalenderRouteHandler = require('../../controllers/googlecalender/googleHandler/route-handler');


class calenderRoutes {
  constructor(app) {
    this.app = app;
  }

  /* creating app Routes starts */
  appRoutes() {
    this.app.post('/api/create-calender', CalenderRouteHandler.createCalender); 
    this.app.get('/', CalenderRouteHandler.index); 
  }

  routesConfig() {
    this.appRoutes();
  }
}
module.exports = calenderRoutes;
