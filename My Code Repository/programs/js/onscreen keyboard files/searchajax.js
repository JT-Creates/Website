var searchindexReq;var searchindexReq2;
function searchindex() 
{	
	if (searchindexReq.readyState == 4 || searchindexReq.readyState == 0){		
	var str = document.getElementById('searchtxt').value;
    //alert(str);
	if (str.length < 2 || str.length > 15) {return;}
	searchindexReq.open("GET", '/Search_ajax.php?q=' + str, true);		
	searchindexReq.onreadystatechange = handleMainSearchSuggest; 		
	searchindexReq.send(null);	
	}
}
function divmainsuggestOut(div_value){document.getElementById('mainsearch_suggest').innerHTML = '';}
if (window.XMLHttpRequest){
	searchindexReq = new XMLHttpRequest(); 
	searchindexReq2 = new XMLHttpRequest(); 
}
else if (window.ActiveXObject){
	searchindexReq = new ActiveXObject("Microsoft.XMLHTTP"); 
	searchindexReq2 = new ActiveXObject("Microsoft.XMLHTTP"); 
} 
function handleMainSearchSuggest() 
{	
if (searchindexReq.readyState == 4) 
{	
    //alert("good");	
	var ss = document.getElementById('mainsearch_suggest');
	//alert(searchindexReq.responseText);
	var str = searchindexReq.responseText.split("\n");
	var len = str.length;
	len = len - 1;
	if (len > 0){
	    ss.innerHTML = '';
		for(var i=0; i < len; i = i + 1){	
		var stri = str[i];
		var elem = stri.split("|||");
		var suggest = '<div onmouseover="javascript:mainsuggestOver(this);" ';
		suggest += 'onmouseout="javascript:mainsuggestOut(this);" ';
		suggest += 'onclick="javascript:setmainSearch(this.innerHTML);" ';
		suggest += 'class="mainsuggest_link">';
		suggest += "<table width=100%><tr><td height=20 align=left onClick=\"window.location.href='";
		suggest += elem[1];
		suggest += "'\" >";
		suggest += "<A href=\"";
		suggest += elem[1];
		suggest += "\">";
		suggest += elem[0];
		suggest += "</A>";
		suggest += "</table>";				
		suggest +=	'</div>';
		ss.innerHTML += suggest;			
		}
	}
}
}
function mainsuggestOver(div_value){div_value.className = 'mainsuggest_link_over';}
function mainsuggestOut(div_value){	div_value.className = 'mainsuggest_link';}
function setmainSearch(str)
{
var reg=/<a[^>]+>([^<]+)<\/a/i;
var result = reg.exec(str);
searchindexReq2.open("PUT", '/searchcount.php?q=' + result[1], true);	
searchindexReq2.send(null);  
}