const {google} = require('googleapis');
const DotEnv = require('dotenv');

DotEnv.config({ path: './.env' });


class GoogleApi{

constructor(){
    this.CREDENTIALS = process.env.CREDENTIALS
      
    
    this.calendarId = process.env.CALENDER_ID;
    this.SCOPES = 'https://www.googleapis.com/auth/calendar';
    this.calendar = google.calendar({version : "v3"});
}


 auth(){
   let auth =  new google.auth.JWT(
        this.CREDENTIALS.client_email,
        null,
        this.CREDENTIALS.private_key,
        this.SCOPES
    );
    return auth
}


    async dateTimeForCalander(){
// Get date-time string for calender
        // let date = new Date();

        // let year = date.getFullYear();
        // let month = date.getMonth() + 1;
        // if (month < 10) {
        //     month = `0${month}`;
        // }
        // let day = date.getDate();
        // if (day < 10) {
        //     day = `0${day}`;
        // }
        // let hour = date.getHours();
        // if (hour < 10) {
        //     hour = `0${hour}`;
        // }
        // let minute = date.getMinutes();
        // if (minute < 10) {
        //     minute = `0${minute}`;
        // }
    
        // let newDateTime = `${year}-${month}-${day}T${hour}:${minute}:00.000${TIMEOFFSET}`;
    
        // let event = new Date(Date.parse(newDateTime));
    
        // let startDate = event;
        // // Delay in end time is 1
        // let endDate = new Date(new Date(startDate).setHours(startDate.getHours()+1));
    
        return {
            'start': startDate,
            'end': endDate
        }
       
    }

    async insertEvent (event) {

         try {
            let response = await this.calendar.events.insert({
                auth: this.auth(),
                calendarId: this.calendarId,
                resource: event
            });
        
            if (response['status'] == 200 && response['statusText'] === 'OK') {
                res.send({status:response['status'],message:"Event created successfully"})
            } else {
                return 0;
            }
        } catch (error) {
            return error;
            //return 0;
        }

    };
    
}

// // Event for Google Calendar


module.exports = GoogleApi



// Get all the events between two dates



