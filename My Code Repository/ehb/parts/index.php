<?php
    $_POST['p']='Components';
    $_POST['r']='2';
    include("../banner.php");
?>
<style>
#main_container {
    display: block;
}
</style>
<h2>Component library</h2>
<br>
<?php
    $D=opendir(".");
    while($N=readdir($D)){
        if($_SERVER['QUERY_STRING']=="hidden"){
            $H="";
            $af="./";
            $atext="Hide";
        }
        else{
            $H=".";
            $af="./?hidden";
            $at="Show";
        }
        if(substr("$N", 0, 1)!=$H&$N!="index.php"&$N!="action.php"&$N!="thumbs"&$N!="database"&$N!="detailspage.php"&$N!="community"){
            if(file_exists("./thumbs/$N.jpg")){
                $file="./thumbs/$N.jpg";
            }
            else{
                $file="./thumbs/error.jpg";
            }
            echo("<div id='backplane'><b><p id='partname'>$N</p></b><br><a href='./$N'><img id='img' src='$file'></a></div>");
        }
    }
    ?>
<?php
    echo(file_get_contents("../footer.php"));
?>