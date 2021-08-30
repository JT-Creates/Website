<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<style>
textarea{
    padding:.5em;
    width:98%;
    height:32rem;
    border-radius:1em;
    border:1px solid black;
    background:darkgray;
    right:5%;
    left:-5%;
    bottom:5%;
}
</style>
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
<meta http-equiv="Expires" content="0"/>
<?php
$FRAME=$_GET['FRAME'];
if($FRAME=="iframe"){
?>
<!DOCTYPE html>
<html>
<head>
<style>
body,html,div,main,textarea{
    align-items:center;
    width:98%;
    height:100%;
    position:relative;
    top:0;
    right:0;
    left:0;
    bottom:0;
    display:block;
    overflow:hidden;
    
}
textarea{
    font:12pt monospace;
    transform:scale(.88,.88);
    width:110%;
    height:99%;
    right:5%;
    left:-5%;
    bottom:5%;
    
}
</style>
</head>
<body>
<?php 
} else {
echo(file_get_contents("https://theelectronichandbook.tech/banner.php?page=Battery-Log-Program"));
}
$D=opendir(".");
while($N=readdir($D)){
if($_SERVER['QUERY_STRING']=="hidden"){
$H="";
$af="./";
$atext="Hide";
}else{
$H=".";
$af="./?hidden";
$at="Show";
}
if(substr("$N", 0, 1)!=$H&$N!="latestcode.php"){
?>
<div id='backplane' style="<?
if($FRAME=="iframe"){
echo"display:none;";
}?>">
    <div style='background-color:white;'>
    <b><?php
    echo"<a href='./$N'>$N</a></b></div></div>";
    if(substr("$N",-10)=="latest.BAT"){
    $latest=$N;
    }
    }
    }
    ?>
<main>
<script>
jQuery(document).ready(function(){

    jQuery('.ajaxform').submit( function() {

        $.ajax({
            url     : $(this).attr('action'),
            type    : $(this).attr('method'),
            dataType: 'json',
            data    : $(this).serialize(),
            success : function( data ) {
                        // loop to set the result(value)
                        // in required div(key)
                        for(var id in data) {
                            jQuery('#' + id).html( data[id] );
                        }
                      }
        });

        return false;
    });

});
var timer, delay = 256;

timer = setInterval(function(){
        //document.getElementById("frame").src="https://stackoverflow.com/questions/58703346/building-batch-program-to-monitor-create-and-delete-battery-logs";
    $.ajax({
      type    : 'POST',
      url     : 'profile.php',
      dataType: 'json',
      data    : $('.ajaxform').serialize(),
      success : function(data){
                  for(var id in data) {
                    jQuery('#' + id).html( data[id] );
                  }
                }
    });
}, delay);
</script>
<form action='profile.php' method='post' class='ajaxform'>
</form>

<textarea id='result' disabled style="color:black;"></textarea>
</main></body></html>