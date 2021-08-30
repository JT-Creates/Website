<?php echo(file_get_contents("https://codingcommons.tech/ehb/banner.php?page=Basic"));?>
<h2>Component library</h2>
<br>
<?php
$myDirectory=opendir(".");
while($entryName=readdir($myDirectory)) {
$dirArray[]=$entryName;}
closedir($myDirectory);
$indexCount=count($dirArray);
for($index=0; $index < $indexCount; $index++) {
if($_SERVER['QUERY_STRING']=="hidden")
{$hide="";
$ahref="./";
$atext="Hide";}
else
{$hide=".";
$ahref="./?hidden";
$atext="Show";}
if(substr("$dirArray[$index]", 0, 1) != $hide) {
if($dirArray[$index]!="index.php"){
$name=$dirArray[$index];
$src="../thumbs";
$image="$src/$name.jpg";
  if(file_exists($image)){
      $file="$image";
  }else{
      $file="$src/error_log.jpg";
  }
  print("
  <div id='backplane'>
    <b><p id='partname'>$name</p></b><br>
    <a href='./$name'> <img id='img' src='$file'></a>
  </div>");
}
}
}?>
</div><footer id="footer"><br>Proudly Served by LiteSpeed Web Server at <a href="https://codingcommons.tech/ehb"> theelectronichandbook.tech</a> Port 443</footer></div>
</body>
</html>