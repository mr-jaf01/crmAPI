const {google} = require('googleapis');

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


    // async dateTimeForCalander(){

    
    //     return {
    //         'start': startDate,
    //         'end': endDate
    //     }
       
    // }

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
           
        }

    };
    
}




module.exports = GoogleApi





