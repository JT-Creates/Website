var ins, srt, tb, tr, td, txt, swg=true, i, x, y, sSw, dir="asc", swc=0;
function sort(n){
    tb=document.getElementById("results");
    while(swg){
        swg=false;
        tr=tb.tr;
        for(i=1; i<(tr.length-1); i++){
            sSw=false;
            x=tr[i].getElementsByTagName("TD")[n];
            y=tr[i+1].getElementsByTagName("TD")[n];
            if(dir=="asc"){
                if(x.innerHTML.toLowerCase()>y.innerHTML.toLowerCase()){
                    sSw=true;
                    break;
                }
            }
            else if(dir=="desc"){
                if(x.innerHTML.toLowerCase()<y.innerHTML.toLowerCase()){
                    sSw=true;
                    break;
                }
            }
        }
        if(sSw){
            tr[i].parentNode.insertBefore(tr[i+1], tr[i]);
            swg=true;
            swc++;
        }
        else{
            if(swc===0&&dir=="asc"){
                dir="desc";
                swg=true;
            }
        }
    }
}

function search(c){
    ins=document.getElementById("Query");
    srt=ins.value.toUpperCase();
    tb=document.getElementById("results");
    tr=tb.getElementsByTagName("tr");
    for(i=0; i<tr.length; i++){
        td=tr[i].getElementsByTagName("td")[c];
        if(td){
            txt=td.value||td.innerText;
            if(txt.toUpperCase().indexOf(srt)>-1){
                tr[i].style.display="";
            }
            else{
                tr[i].style.display="none";
            }
        }
    }
}
