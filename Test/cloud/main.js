// This call to external library of moment-timezone.js for select a country time.
var moment = require('cloud/moment-timezone.js');
// Contain the countries with Date/Time
moment.tz.add(require('cloud/moment-timezone-with-data.js'));
// Add (Date/Time) Guatemala country
moment.tz.add('America/Guatemala|LMT CST CDT|62.4 60 50|0121212121|-24KhV.U 2efXV.U An0 mtd0 Nz0 ifB0 17b0 zDB0 11z0');

function Cualquiera(horaFin,idPromo,horaActual) {
	var hoursClass = new Parse.Object.extend("Hours");
	var hoursData = new hoursClass();
	// Difference between the time zone Guatemala City and meridian Greenwich(.utcOffset('-06:00'))
	var horaFinUno = new Date(horaFin);
	var horaActualUno = new Date(horaActual);
	console.log(horaActualUno + "   Hora!!! ///////////////");
	if(horaActualUno > horaFin){
		console.log("Entro!!! ///////////////");
		hoursData.id = idPromo;		
		hoursData.set("Valid",false);
		hoursData.save();
	};
};

Parse.Cloud.define("guatemalaDate", function (request, response) {
	

	/* ---------------------------------------------------------- */
	var query = new Parse.Query('Hours');
	var actualHora = moment().tz("America/Guatemala").format('LLL');
	query.equalTo("Valid", true);
	query.find({
		success: function(results) {
			for (i in results) {
				Cualquiera(results[i].attributes.FinPromotion,results[i].id,actualHora);
			};
			response.success("Realizado");
		},
		error: function(error){
			console.log(error);	
		}
	});
			//response.success("Realizado!!!");
			//response.success(a+"actual"+b.valueOf()+"parse"+ja.valueOf());
});