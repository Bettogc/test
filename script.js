$(document).ready(function(){
	
	Parse.initialize("Oj4cMrdcMATfAfUgZ4yR439n7TncodrwxNyWQRSK","GYuIuRYG1XE6j2My8dIIcqklInwyXPYiRHE7QmAJ");
	
	var Hours = Parse.Object.extend("Hours");
	var query = new Parse.Query(Hours);
	query.find({
	  success: function(results) {
		for (var i = 0; i < results.length; i++) {
			//console.log(results[i].attributes)
		}
	  },
	  error: function(error) { }
});
	
/*var a = moment.tz("America/Guatemala");
var b = moment.tz("May 12th 2014 8PM", "MMM Do YYYY hA", "America/Toronto");
var c = moment.tz(1403454068850, "America/Toronto");
a.format(); // 2013-11-18T11:55:00-05:00
b.format(); // 2014-05-12T20:00:00-04:00
c.format(); // 2014-06-22T12:21:08-04:00
	
	var a = a.format('DD MM AAAA');
*/
	
Parse.Cloud.run('guatemalaDate', {}, {
success: function(result) {
	//result is 'Hello world!'
console.log(result)
	
 },
error: function(error) {
	alert(error)
}
});
		
})
