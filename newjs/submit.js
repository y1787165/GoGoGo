
(function ($) {
    "use strict";

})(jQuery);

var ths = ['學生姓名','學員編號','出生日期','就讀學校','就讀班級','父姓名','父聯絡電話','母姓名','母聯絡電話','緊急聯絡人姓名','緊急聯絡人電話','居住地址','備註','是否還在學','棋力','參與課程'];
	

$(document).ready(function() {
	//your code here
	var parameters = location.search;
    var yo = parameters.split("=");

    if( yo[1]=="add" ) {
    	add();
    }
    else if( yo[1]=="modify" ){
		modify();
	}
});

function add(){
	var html = "";
	
	html += "<tr>";

	for( var i=0 ; i<16 ; ++i ){
		html += addRow(ths[i],"");
	}

	$('#table').append(html);
}

function modify() {
	/*var parameters = location.search;
    var yo = parameters.split("=");
    alert(yo[1]);
*/
	var student = {
		'name' : '王八蛋',
		'number' : '225556667',
		'hobby' : '1194/23/45',
		'a' : '台北市信義區監獄路5巷6號',
		'b' : '8年7班',
		'c' : '王品', 
		'd' : '0912345678', 
		'e' : '誠品', 
		'f' : '0912345678', 
		'g' : '我朋友', 
		'h' : '0422598746', 
		'i' : '低能兒', 
		'j' : '是', 
		'k' : '台北市123國小',
	};

	/*Adding headers*/
	var html = "";
	
	html += "<tr>";
	html += addRow(ths[0],student.name);
	html += addRow(ths[1],student.number);
	html += addRow(ths[2],student.hobby);
	html += addRow(ths[3],student.k);
	html += addRow(ths[4],student.b);
	html += addRow(ths[5],student.c);
	html += addRow(ths[6],student.d);
	html += addRow(ths[7],student.e);
	html += addRow(ths[8],student.f);
	html += addRow(ths[9],student.g);
	html += addRow(ths[10],student.h);
	html += addRow(ths[11],student.a);
	html += addRow(ths[12],student.i);
	html += addRow(ths[13],student.j);
	html += addRow(ths[14],"點我觀看棋力");
	html += addRow(ths[15],"點我觀看課程");

	$('#table').append(html);
}

function addRow(key,val){
	// 還需要處理有按鈕的情況
	var h = "<tr><th width=200px >"+key+"</th>";

	if( key === '棋力' )
		h += "<td onclick=\"watchLevel()\" contenteditable='true'>"+val+"</td>";
	else if ( key === '參與課程' )
		h += "<td onclick=\"course()\" contenteditable='true'>"+val+"</td>";
	else
		h += "<td contenteditable='true'>"+val+"</td>";

	h += "</tr>";
	return h;
}

function submit(){
	// 下SQL 指令
	alert("YAAAAA");
}
