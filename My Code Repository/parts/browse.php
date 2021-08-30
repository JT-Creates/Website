<?php
    $_POST['p']='Components';
    $_POST['r']='2';
    include("../banner.php");
    ?>
<link rel="stylesheet" type="text/css" href="../code/style/search_style.css">
<script>
    function find(){
        search(document.getElementById("selector").value);
    }
</script>
<span>
    <select id="selector" label="filter by:">
        <option value="0">Name</option>
        <option value="3">Category</option>
        <option value="2">ID/SN</option>
        <option value="1">Summery</option>
        <option value="4">Description</option>
    </select>
    <input type="text" id="Query" onkeyup="find()" placeholder="Search...">
</span>
<hr>
<table id="results">
    <tbody>
        <?php
            $BBXY=opendir("./");
            $B = opendir("$BBXY/community/");
            while($A=readdir($B)){
                if($_SERVER['QUERY_STRING']=="hidden"){
                    $C0="";
                }
                else{
                    $C0=".";
                }
                if(substr($A,0,1)!=$C0){
                    $K=("./$A/");
                    $N=opendir($K);
                    while($E1=readdir($N)){
                        if($_SERVER['QUERY_STRING']=="hidden"){
                            $C1="";
                        }
                        else{
                            $C1="/";
                        }
                        if(substr($E1,0,1)!=$C1){
                            $F=("$K$E1/");
                            $G=opendir($F);
                            while($E2=readdir($G)){
                                if($_SERVER['QUERY_STRING']=="hidden"){
                                    $C2="";
                                }
                                else{
                                    $C2=".";
                                }
                                if(substr($E2,0,1)!=$C2){
                                    if(substr($E2,0,1)!=$C2){
                                        $V="$F$E2";
                                        include($V);
                                    }
                                    $J=explode("\n",wordwrap($S,128));
                                    $J=$J[0].'...';
                                    echo("<tr class='card' style='font:.9em;'><td class='nam' onclick='window.location.href = \"./detailspage.php?uid=$uid\"' style='color:#171;'>$nam: </td><td class='sum'> $sum </td><td class='inf' style='color:#888;'>$inf</td><td class='cat' style='font:.8em;color:gray;'>Category: <span style='color:#ccc;'> $cat </span> </td><td class='id' style='font:.8em;color:gray;'> Part ID: <span style='color:#ccc;'> $pn </span></td></tr>");
                                }
                            }
                        }
                    }
                }
            }
        ?>
    </tbody>
</table>
<?php include("../footer.php");?>