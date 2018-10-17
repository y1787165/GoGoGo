
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

function searchDate( self ){
	var s_date = document.getElementById("s_date").value;
	var e_date = document.getElementById("e_date").value;

	if( s_date==="" || e_date==="" ){
		alert("請輸入完整日期資訊");
	}
	else {
		alert(s_date+" "+e_date);
	}
}

function showCourse(){
	var course = {
		'course':[
			{
				'id' : 'HA123sdf',
			},
			{
				'id' : 'HA123sdf',
			},
			{
				'id' : 'HA123sdf',
			},
		]
	};
	var html = "";
	html += "<tr>";

	for( var i=0 ; i<50 ; ++i ){
		html += addRow( 'id', course.course[0].id );
	}
	$('#table1').append(html);
	$('#table2').append(html);
}

function removeAllTables(){
	removeTable('table1');
	removeTable('table2');
}

function removeTable( table ){
	var tb = document.getElementById(table);
    var rowNum=tb.rows.length;
    for (i=0;i<rowNum;i++){
        tb.deleteRow(i);
        rowNum=rowNum-1;
        --i;
    }
}

function addRow(key,val){
	// 還需要處理有按鈕的情況
	var h = "<tr><th width=200px>"+key+"</th>";
	h += "<td>"+val+"</td>";
	h += "</tr>";
	return h;
}

function queryClass(clas){
	alert(clas);
}

function queryCourse(query){
	showCourse();
}

function queryName(name){
	removeAllTables();
}

function onKeyS(event){
	if (event.keyCode == 13) {  
		modifiable = true;
		queryForm();

		if( $('#radio1').attr("checked")=='checked' ){
			queryClass($('#search').val());
		}
		else if ( $('#radio2').attr("checked")=='checked' ){
			queryCourse($('#search').val());
		}
		else if ( $('#radio3').attr("checked")=='checked' ){
			queryName($('#search').val());
		}
    }
}
