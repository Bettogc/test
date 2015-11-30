// This call to external library of moment-timezone.js for select a country time.
var moment = require('cloud/moment-timezone.js');
// Contain the countries with Date/Time
moment.tz.add(require('cloud/moment-timezone-with-data.js'));
// Add (Date/Time) Guatemala country
moment.tz.add('America/Guatemala|LMT CST CDT|62.4 60 50|0121212121|-24KhV.U 2efXV.U An0 mtd0 Nz0 ifB0 17b0 zDB0 11z0');

Parse.Cloud.define("guatemalaDate", function (request, response) {  
	
	// Difference between the time zone Guatemala City and meridian Greenwich(.utcOffset('-06:00'))
	var b = moment().tz("America/Guatemala");
	// Date Format
	//var b = b.format("DD-MM-YYYY hh:mm:ss a");

	//response.success(b);
	
	
	
	var query = new Parse.Query("Hours");
  query.find({
    success: function(results) {

    for (var i = 0; i < results.length; ++i) {
		var ja = results[i].attributes.FinPromotion;
    }
		response.success(b.valueOf()+" "+ja.valueOf());
	}
  });
	
	
	
});