const {google} = require('googleapis');
const DotEnv = require('dotenv');

DotEnv.config({ path: './.env' });

// Provide the required configuration


// Google calendar API settings





// Your TIMEOFFSET Offset
const TIMEOFFSET = '+05:30';

class GoogleApi{

constructor(){
    this.CREDENTIALS = 
        {
            "type": "service_account",
            "project_id": "adroit-poet-362412",
            "private_key_id": "e6c14da072f19caf7847bbf2e3549cdb93b21e77",
            "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQClpc0qg4GIOezK\nbLMEEfJOUvFBfcfsT/bzA18gzrtyRtNjpP8klPGNxcR01paUMNSV6nTwcpK8jm5Q\np4QN4GS8rMkUdBBvjtDGx1Hs0oKu7ZtG8E7y4qWBXbtc8Doiot2caGYmjWJggPKi\nDTCH11I++nQptPMc0K/sjZPj/aZrgrWAI+3WY7l5uJh12AVIR1bUZanhwS7w/CGX\ngx2k5KQBKvZntOTsrjEN2dENdj20T/Z5G6Tr6taHSyiG1sDWnI8W9pwh4kLpuVUw\nQsxVmkSVHFpZq/YZyqomwrji/BZ36RRkJ0D2zblKsm9ZiDMjSzpNvDI3Ac4PG5tq\n7ciTccjlAgMBAAECggEAQkvVDMZcMd7pD+0oSqE6JrHYf/ss6D3q2sEHMjS7XdXN\n5ewT95qrALBd29tEoePXOXcAPXnFk7S3nw0kc39TIhZPViHLsDJrCZudhNiN2CAd\nzOsB1gDy949BnUVCJzmi02YPOC/O50vEkCoSOdPqRW1sz4Jt6KL3Pgg93/pVQGKH\nkQXpZZ+/29AiBNXTYyfhN++49eO4o2FaLSoxQXPw2VrxmxQcJUGLCgpzbKXfhNbP\n45KiVI2x6c8hwoPwdcMNcu9/L9WqQx0x7mQQ4iJncoWOGAgPn73UNgwAh0BZgbl6\n0fpzX2Bp8ov/Z6JLH/uSmaZNjYJIVAImfDAWUV/NswKBgQDRWTLl5qh/Y6deNq2m\ni8Fmdrc891MTsUAhWU42PoIlDhEznDDDU6pe8sGvM7sq6OMo0LjRma0/hxpecaWx\nHmbKyZS6yYFqFCNoHtVBOkgPieedulFeYV1uto9etCgouK49pU8BmCYJ/fXb30ur\nmEopb5yGrHB649p5/xk1GhsjcwKBgQDKj5VnpcdEGq8RZEUJf2OJQNiTNUDeWbXx\nvo1OUBiKmaR4cCzPqe6avww68UibQcWGQTP7uJBwHeoLF7ywMQsqzov4FTJfsgBH\nxZZ74lClEd8/cJjZprK2z5GBnGFUQC3bjD3IRSY61EJ6mlNNSad1X79MPxcd2OPU\nchX5EPQ8RwKBgQDQgiEZrkTArIa0ZY1LRgMYhME4rbVG9dHD5WjqyhNhyMMFPlmr\nEhesfei/Ea0nrdEig9CwonlVvsBatKKs6HTFIUVLTQvilbA2Mg+A6gV/xIC2Li6A\n7ETc0mO1lYYyGM8igxVPpzSr2xAXMC3z+LhU0N97myBkpbCitZtrsla5VQKBgFh+\n0m8t5hjC76lRfTfhB8N3KSdnJKf/2ZV8ApAsPgyPg2N63pj7TNsejGFT+Lybx4gY\nBHX89F2HNDEUdcMkKhTRmCUSXaehRK4WjOAix8jWPgqhTqYIRhvII3HUuFDumRpJ\n8tQEIeehxEl8Eti5TQfihNjy106a6y5tiVv/JDURAoGBAKCjrXeXGvf0m5jQyTWr\nJ8LUu3E6ph82rdIlpGXhkrFh9sif0F/BU84CCFyR+rC9X2j8OB0K1ZZO5wsBRJ85\nRxUldBCOA9e5URBdLIAGu6FgMjx6m58VPlfn9AeH8EftSRK5z6AIWMmaU87+oj5x\nbd09KdAqZeLc+w2+UCi29B77\n-----END PRIVATE KEY-----\n",
            "client_email": "google-calender-api-test@adroit-poet-362412.iam.gserviceaccount.com",
            "client_id": "117705478304220114019",
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/google-calender-api-test%40adroit-poet-362412.iam.gserviceaccount.com"
           
          }
    
    this.calendarId = "dvd568o93fn70e465bhkufsuus@group.calendar.google.com";
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



