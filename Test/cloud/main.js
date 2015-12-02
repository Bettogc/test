// This call to external library of moment-timezone.js for select a country time.
var moment = require('cloud/moment-timezone.js');
// Contain the countries with Date/Time
moment.tz.add(require('cloud/moment-timezone-with-data.js'));
// Add (Date/Time) Guatemala country
moment.tz.add('America/Guatemala|LMT CST CDT|62.4 60 50|0121212121|-24KhV.U 2efXV.U An0 mtd0 Nz0 ifB0 17b0 zDB0 11z0');

function changeStatus(endHour,idPromo,actualHourCST) {
	var hoursClass = new Parse.Object.extend("Hours");
	var hoursData = new hoursClass();
	var endDatePromotion = new Date(endHour);
	var actualHourGuatemala = new Date(actualHourCST);
	// Data validation (if actualHourGuatemala is major a endDatePromotion return false in status col in parse)
	if(actualHourGuatemala > endDatePromotion){
		hoursData.id = idPromo;		
		hoursData.set("Valid",false);
		hoursData.save();
	};
};

Parse.Cloud.define("guatemalaDate", function (request, response) {
	// Connection with Hours Class for objectId
	var query = new Parse.Query('Hours');
	// Take the Date of Guatemala City Country in long date
	var actualHour = moment().tz("America/Guatemala").format('LLL');
	query.equalTo("Valid", true);
	// Find the endDate in Hour class
	query.find({
		success: function(results) {
			for (i in results) {
				// Take the actualHour variable for send to changeStatus function
				changeStatus(results[i].attributes.FinPromotion,results[i].id,actualHour);
			};
			response.success("Realizado");
		},
		error: function(error){
			console.log(error);	
		}
	});
});