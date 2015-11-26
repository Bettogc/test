$(document).ready(function(){
	Parse.initialize("Oj4cMrdcMATfAfUgZ4yR439n7TncodrwxNyWQRSK","GYuIuRYG1XE6j2My8dIIcqklInwyXPYiRHE7QmAJ");
	
	var Hours = Parse.Object.extend("Hours");
	var query = new Parse.Query(Hours);
	query.find({
	  success: function(results) {
		for (var i = 0; i < results.length; i++) {
			console.log(results[i].attributes)
		}
	  },
	  error: function(error) { }
		
});
	
	
	Parse.Cloud.run('moreStuff', { object: request.object }, {
  success: function(result) { console.log(result); },
  error: function(error) { console.log(error); }
});
	
	
	
})
