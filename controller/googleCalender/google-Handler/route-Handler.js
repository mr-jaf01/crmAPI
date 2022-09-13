const Error = require("../../../utils/error-handler")
const  GoogleApi = require("../config/googleCalender")
class CalenderRouteHandler {
  async createCalender(request, response,next) {
 
    let googlecalender = new GoogleApi()

    // Insert new event to Google Calendar
    console.log(request.body)
    //{ start: 2022-09-13T16:57:00.000Z, end: 2022-09-13T17:57:00.000Z }
        let event = {
           'summary': request.body.summary,
           'description': request.body.description,
           'start': {
               'dateTime': request.body.startdate,
               'timeZone': 'Asia/Kolkata'
           },
           'end': {
               'dateTime': request.body.enddate,
               'timeZone': 'Asia/Kolkata'
           }
       };
        googlecalender.insertEvent(event)
  
    
}

async index(request, response,next) {
    response.send({message:"it works"})
}

  }

  
module.exports = new  CalenderRouteHandler();
