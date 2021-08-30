<?php 
$datetime = new DateTime();
$currentTime = $datetime -> format("Y-m-d_\TH.i.s_T");
ini_set("session.cache_expire", 0);
ini_set("session.name", 1);
session_start();
$ref = $_GET['ref'];
if ($_GET['date'] != $currentTime) {
  header("Location: ./?ref=$ref&date=$currentTime");
  exit();
}
$expire=time()+60*60*60*24*30;//however long you want
if (!isset($_COOKIE['userid'])) {
    setcookie('userid', uniqid(), $expire);
} else {
    setcookie('userid', $_COOKIE['userid'], $expire);
}
$userid = $_COOKIE['userid'];
$filename = "../../users/$userid\t".$_SERVER['REMOTE_ADDR'].".php" ;
file_put_contents($filename,file_get_contents($filename)."visited at: $currentTime\n");
$log = file_get_contents("./log.txt")."$currentTime\t$userid\t".$_SERVER['REMOTE_ADDR']."\t".$_SESSION['hasVisited'];
    $link="./HealthSafetyPlan_8_5_21_Final.pdf";
    file_put_contents("./log.txt", "$log\tEPUB\n");
    $ext = "PDF";

$counter_name = "counter.txt";

// Check if a text file exists.
// If not create one and initialize it to zero.
if (!file_exists($counter_name)) {
  $f = fopen($counter_name, "w");
  fwrite($f,"0");
  fclose($f);
}

// Read the current value of our counter file
$f = fopen($counter_name,"r");
$counterVal = fread($f, filesize($counter_name));
fclose($f);

// Has visitor been counted in this session?
// If not, increase counter value by one
if(!isset($_SESSION['hasVisited'])){
  $_SESSION['hasVisited']="yes";
  $counterVal++;
  $f = fopen($counter_name, "w");
  fwrite($f, $counterVal);
  fclose($f);
}

//echo "You are visitor number $counterVal to this site";
echo '
<html>
        <title>Health and Safety Plan Download</title>
    <h1>Redirecting</h1>
    <script type="text/javascript">
        //!alert("If the bood does not download, please check you downloads folder and make sure the file is not already downloaded.\nThank you from,\n- OBS Development and Communications");
        window.location.replace("'.$link.'");
        window.setTimeout(function(){window.history.back();},4000);
    </script>
    ';
?>
