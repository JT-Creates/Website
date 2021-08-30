function searchSuggest() 
{	
    //alert("search ... ");
	if (searchReq.readyState == 4 || searchReq.readyState == 0) 
	{		
		//var str = escape(document.getElementById('equtxt').value);	
		var str = document.getElementById('equtxt').value;	
		if (str.length < 2 || str.length > 15) return;
		
		//str = str.replace(/\%20\%28/,"%28");
		//str = str.replace(/\%28/,"%5C%28");
		str = str.replace(/\+/," ");
		
        if (str.length < 3) 
		{
	        document.getElementById('search_suggest').innerHTML='';
		    return;
		}	
        //alert(str);		

		searchReq.open("GET", 'ajax/balancer_ajax.php?q=' + str + '', true);		
		searchReq.onreadystatechange = handleSearchSuggest; 		
		searchReq.send(null);	
	}
}

//Our XmlHttpRequest object to get the auto suggest
var searchReq; var searchReq2;
	if (window.XMLHttpRequest)
	{ // Mozilla, Safari, ... 
 	    searchReq = new XMLHttpRequest(); 
 	    searchReq2 = new XMLHttpRequest(); 
	}
	else if (window.ActiveXObject)
	{ // IE 
	    searchReq = new ActiveXObject("Microsoft.XMLHTTP"); 
	    searchReq2 = new ActiveXObject("Microsoft.XMLHTTP"); 
	} 
//var searchReq = getXmlHttpRequestObject();

//Called when the AJAX response is returned.
function handleSearchSuggest() 
{	
	if (searchReq.readyState == 4) 
	{		
	    var ss = document.getElementById('search_suggest');
		ss.innerHTML = '';
		var str = searchReq.responseText.split("\n");
		var len = str.length;
		if (len ==0) return;
		len = len -1;
		for(var i=0; i < len; i = i + 1)
		{
			var suggest = '<div onmouseover="javascript:suggestOver(this);" ';
			suggest += 'onmouseout="javascript:suggestOut(this);" ';
			suggest += 'onclick="javascript:setSearch(this.innerHTML);" ';
			suggest += 'class="suggest_link">';
			
			var stri = str[i];
			suggest += "<table><tbody><tr>"
			suggest += "<td align=left>";
			suggest += stri;
			suggest += "</td>";
			suggest += "</tr></tbody></table>";				
			suggest +=	'</div>';
			ss.innerHTML += suggest;
		}
	}
}
//Mouse over function
function suggestOver(div_value)
{
	div_value.className = 'suggest_link_over';
}

//Mouse out function
function suggestOut(div_value)
 {	div_value.className = 'suggest_link';}
 
function divsuggestout(div_value)
 {
    //alert("divsuggestout");
 	document.getElementById('search_suggest').innerHTML = '';
}
 
 //Click function
 function setSearch(value)
{
 	value = value.replace(/\r\n/g,"");
	value = value.replace(/\n/g,"");	
    //alert(value);
	var reg=/^.+>(.+)<\/td>/i;
	var result = reg.exec(value);
	//alert(result);
	//alert(result[1]);
	//str = str.replace(/^.+>.+<\/td><td/
	document.getElementById('equtxt').value = result[1];
	document.getElementById('sh').innerHTML = result[1];
	document.getElementById('search_suggest').innerHTML = '';
	document.getElementById('yn').innerHTML = '<font color=green>&#8730; Balanced !</red>';
	searchReq2.open("PUT", '/chem/ajax/balancercount.php?q=' + result[1], true);	
	searchReq2.send(null);
}
