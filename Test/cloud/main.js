var client = require('mailgun');
client.initialize('sandboxa8f864394cf142d1a007d54e4c6820be.mailgun.org', 'key-186df9f0d0bb4303e5bc3bda6a4ce76f');




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
	
	a = [];
	
	/* ---------------------------------------------------------- */
	var query = new Parse.Query('Hours');
	var validacion = new Parse.Object("Hours");
	
	query.equalTo("Valid", true);
	query.find({
		success: function(results) {
			// Do something with the returned Parse.Object values
			for (x in results) {
				
				var a = results[x].attributes;
				var z = JSON.stringify(a);
				
				console.log(z);
				
				 //la.push(results[x].attributes.FinPromotion);
				 //le.push(la[x].valueOf());
				if(b.valueOf() >= ((results[x].attributes.FinPromotion).valueOf())){
					
				}
			/* -------------------------------------------------------- */
				//if()
			/* -------------------------------------------------------- */	
				
			//var object = results[i].attributes.FinPromotion;
			//asdf.push(results[i].attributes.FinPromotion);	
						
		}
			response.success("Hora Actual "+b+" Parse Final Date "+le);
			
	},
		error: function(error) {
			alert("Error: " + error.code + " " + error.message);
		}
	});
		
		
		
		//response.success(a+"actual"+b.valueOf()+"parse"+ja.valueOf());

	})



Parse.Cloud.define("sendEmailToUser", function(request, response) {
  client.sendEmail({
    to: "kndalf@gmail.com",
    from: "betto793@gmail.com",
    subject: "Hello from Cloud Code!",
    text: "Using Parse and My Mail Module is great!"
  }).then(function(httpResponse) {
    response.success("Email sent!");
  }, function(httpResponse) {
	 console.log("----------------------------------------------")
    console.error(httpResponse);
	  alert(httpResponse)
    response.error("Uh oh, something went wrong");
	  	 console.log("----------------------------------------------")
  });
});