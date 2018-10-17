
(function ($) {
    "use strict";

})(jQuery);

$(document).ready(function () {
  //your code here
});


function myFunction() {
}

function te_req(type){
	var p="";

	var f = document.createElement("form");
	//f.setAttribute('method',"post");

	if ( type.innerHTML=="查詢/修改" ){ 
		p='student';
		f.setAttribute('action',"present_teacher.html"); 
	}
	else if (type.innerHTML=="新增老師"){ 
		p='add'; 
		f.setAttribute('action',"submit_teacher.html");
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