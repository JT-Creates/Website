<?php
    $_POST['p']='Submitted';
    $_POST['r']='2';
    include("../banner.php");
?>
<link rel="stylesheet" href="../code/search_style.css">
<table id="results">
    <tbody>
        <tr class="card" style="font:.9em;">
            <?php
                $datetime = new DateTime();
                $currentTime=$datetime -> format("yyyy-mm-dd Thhmm.s.u");
                $time=$currentTime;
                $usr=$_POST['ynam'];
                $nam=$_POST['nam'];
                $pti=$_POST['pn'];
                $cat=$_POST['cat'];
                $mf=$_POST['mf'];
                $sum=$_POST['sum'];
                $inf=$_POST['inf'];
                $uid = hash('ripemd160', $nam.$mf.$pti);
                $ks=array('date','ynam','nam','pn','mf','cat','sum','inf','link');
                $d=array($time,$usr,$nam,$pti,$mf,$cat,$sum,$inf,$_POST['dts']);
                $C="community/$mf/$cat/";
                $D="database/$mf.json";
                if(!file_exists($C)){
                    mkdir($C, 0777, true);
                }
                $ic=count($d);

                $J=explode("\n",wordwrap($S,256));
                $J=$J[0].'...';
                echo("<tr class='card' style='font:.9em;'><td class='nam' style='color:#171;'>$nam: </td><td class='sum'>$sum</td><td class='inf' style='color:#888;'>$inf</td><td class='cat' style='font:.8em;color:gray;'>Category: <span style='color:#ccc;'>$cat</span></td><td class='id' style='font:.8em;color:gray;'>Part ID: <span style='color:#ccc;'>$pti</span></td></tr>");
                
                if(!file_exists("$C$pti.php")){
                    file_put_contents("$C$pti.php","<?php\n\$uid = $uid;\n?>", FILE_APPEND);
                }
                if(!file_exists("$D")){
                    file_put_contents("$D","{", FILE_APPEND);
                } else {
                    file_put_contents("$D",trim(file_get_contents("$D"),  $characters = " }").",");
                }
                file_put_contents("$C$pti.php","<!-- APPENDED - $time -->\n<?php ", FILE_APPEND);
                file_put_contents("$D","\n\t\"$uid\" : [\n\t\t{\"uid\": \"$uid\"}", FILE_APPEND);

                for($i=0; $i<$ic; $i++){
                    $T=$d[$i];
                    $k=$ks[$i];

// IMPORTANT LINE
                    file_put_contents("$C$pti.php","$$k=\"$T\";\n", FILE_APPEND);
                    file_put_contents("$D",",\n\t\t{\"$k\" : \"$T\"}", FILE_APPEND);



                    if($ks[$i]=='$link'){
                        echo("<td><a href='$T'>Download here<a></td>");
                    }
                }
                file_put_contents("$C$pti.php","?>\n", FILE_APPEND);
                file_put_contents("$D","\n\t]\n}", FILE_APPEND);
            ?>
        </tr>
    </tbody>
</table>
<?php echo(file_get_contents("../footer.php"));
?>