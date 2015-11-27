 Parse.Cloud.define("hello", function(request, response) {
	 var f = new Date();
	 
	 response.success(f.toLocaleString(-0600 UTC));
 });