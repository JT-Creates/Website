<?php echo(file_get_contents("https://theelectronichandbook.tech/banner.php?page=CPP-Final-dev")."<h2>C++ final development library</h2><br>");$D=opendir(".");while($N=readdir($D)){if($_SERVER['QUERY_STRING']=="hidden"){$H="";$af="./";$atext="Hide";}else{$H=".";$af="./?hidden";$at="Show";}if(substr("$N", 0, 1)!=$H&$N!="index.php"&$N!="partsupload.php"&$N!="action.php"){echo("<div id='backplane'><a>$N</a></div>");}}?>
<style>
input{
border-radius:2px;
margin:1px;
padding:1px;
border:1px solid #eee;
background-color:#fff;
width:90%;
}
form{
border-radius:5px;
margin:10px;
padding:10px;
text-align:left;
background-color:#ddd;
width:16em;
}
</style>
<span>Please leave feedback by filling out the form bellow.</span>
<form action="action.php" method="post">
<strong>Feedback Entry</strong><br>
<span>Your name:<br/><input placeholder="your name..." required type="text" name="ynam" /></span>
<span>rating:<br/><select placeholder="rating..." required name="rating" defaultvalue="0">
    <option label="rating..." value="0">required</option>
    <option label="1" value="1">1</option>
    <option label="2" value="2">2</option>
    <option label="3" value="3">3</option>
    <option label="4" value="4">4</option>
    <option label="5" value="5">5</option>
</select></span>
<span>comments:<br/><input placeholder="comments..." required type="text" name="comments"></input></span>
<span><input type="submit" style="width:auto;"/><input style="width:auto;" type="reset" /></span>
</form>
</div><footer id="footer">Proudly Served by LiteSpeed Web Server at <a href="Https://theelectronichandbook.tech">theelectronichandbook.tech</a></footer></div>