var path = require('path')

module.exports = function(app) {
	
	app.get("/survey", function(req, res){
		res.sendFile(path.join(__dirname + "/../public/survey.html"));
	});
	app.use(function(req, res) {
		res.sendFile(path.join(__dirname + "/../public/home.html"));
	});


}



// When the user scrolls the page, execute myFunction 
// window.onscroll = function() {myFunction()};

// // Get the header
// var header = document.getElementById("surveyHeader");

// // Get the offset position of the navbar
// var sticky = header.offsetTop;

// // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   };
// };