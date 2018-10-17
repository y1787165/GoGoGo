
(function ($) {
    "use strict";

})(jQuery);

$(document).ready(function () {
  //your code here
	//showCourse();
});

function queryForm(){
}

function search(){
	removeAllTables();
	xmlhttp = inithttp(data => { showCourse(JSON.parse(data)); });
		
	if (document.getElementById('radio1').checked) { //課堂編號
		xmlhttp.open("GET","sql/getCourse.php?type=1&param=" + document.getElementById('input_search').value, true);
	} else if(document.getElementById('radio2').checked) { //課程編號
		xmlhttp.open("GET","sql/getCourse.php?type=2&param=" + document.getElementById('input_search').value, true);
	} else if(document.getElementById('radio3').checked) { //課堂名稱
		xmlhttp.open("GET","sql/getCourse.php?type=3&param=" + document.getElementById('input_search').value, true);
	}
	xmlhttp.send();
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

function showCourse(response){
	var html = "";
	html += "<tr>";

	for(var i in response)
	{
    	html += addRow( 'id', response[i].id );
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

function inithttp(callback) {
	var xmlhttp;
	if (window.XMLHttpRequest) {
	    // code for IE7+, Firefox, Chrome, Opera, Safari
	    xmlhttp = new XMLHttpRequest();
	} else {
	    // code for IE6, IE5
	    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
    		callback(this.responseText);
        }
    };
	return xmlhttp;
}