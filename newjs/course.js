
(function ($) {
    "use strict";

})(jQuery);

$(document).ready(function () {
  //your code here
	showCourse();
});

function queryForm(){
}

function course_req(type){
	var p="";
	var f = document.createElement("form");

	if( type.innerHTML=="查詢課程" ){
		p='query'; 
		f.setAttribute('action',"query_course.html");
	}
	else if ( type.innerHTML=="新增課程" ){
		p='add'; 
		f.setAttribute('action',"add_course.html");
	}

	var i = document.createElement("input"); //input element, text
	i.setAttribute('type',"hidden");
	i.setAttribute('name',"username");
	i.setAttribute('value',p);

	var s = document.createElement("input"); //input element, Submit button
	s.setAttribute('type',"submit");
	s.setAttribute('value',"Send data");

	f.appendChild(i);
	f.appendChild(s);
	document.body.appendChild(f);
	f.submit();
}
