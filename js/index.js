
(function ($) {
    "use strict";

})(jQuery);

$(document).ready(function () {
  //your code here
  myFunction();
});


function myFunction() {
	console.log("123");
	var students = [
		{
		'name' : 'Wong',
		'number' : '123',
		'hobby' : 'man', 
		},
		{
		'name' : 'Lee',
		'number' : '456',
		'hobby' : 'yo', 
		},
		{
		'name' : 'Fuck',
		'number' : '789',
		'hobby' : '599', 
		},
	];

	/*Adding headers*/
	var html = "";
	
	for( var i=0 ; i<students.length ; ++i ){
		html += "<tr>";
		var name = students[i].name;
		var num = students[i].number;
		var hob = students[i].hobby;
		html += "<td>"+name+"</td>";
		html += "<td>"+num+"</td>";
		html += "<td>"+hob+"</td>";
		html += "</tr>";
	}

	$('#table').append(html);
}