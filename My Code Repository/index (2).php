<?php
    $_POST['p']='Home';
    $_POST['r']='1';
    include("./banner.php");
    $crl=opendir("./parts/thumbs/");
    while($EN=readdir($crl)){
        if($_SERVER['QUERY_STRING']=="hidden"){
            $h="";
        }
        else{
            $h=".";
        }
        if(substr($EN,0,1)!=$h&$EN!="error.jpg"){
            $A[]=$EN;
        }
    }
    closedir($crl);
    $T=count($A);
?>
<script language="javascript">
    function start(){
        var c = document.getElementById("pt");
        var C = c.children;
        for(var x=0; x< <?php echo($T)?> ; x++){
            C[x].addEventListener("click", test, false);
            startInterval();
            b(x);
            a(0);
        }
        function a(x){
            C[x].style.display="block";
        }
        function b(x){
            C[x].style.display="none";
        }
        var s=0;
        function test(){
            <?php
                for($i=0; $i<$T; $i++){
                    $i2=$i+1;
                    if($i2>=$T){
                        $i2=0;
                        $v="";
                    }
                    else{
                        $v=" else ";
                    }
                    echo("if(s==$i){b($i); a($i2); s=$i2;} $v");
                }
            ?>
        }
    }
    function startInterval(){
        var real_width = 0, s_width, st = true;
        setTimeout(function(){
            var c = elById("pt");
            var C = c.children;
            c.style.width = elById("contents");
            c.style.height = c.clientWidth * (1/1.64);
            //c.clientHeight = c.style.height;
            real_width = elById("contents").clientWidth - 1;
            //if(s_width != elById("main_container").clientWidth) {
                if (real_width < c.clientWidth){
                    for(var x=0; x< <?php echo($T)?> ; x++){
                        //C[x].style.height = C[x].clientHeight + 1;
                        //C[x].clientHeight = C[x].style.height;
                        C[x].style.width = C[x].clientWidth + 1;
                        //C[x].clientWidth = C[x].style.width;
                        //console.log(C[x].clientWidth);
                    }
                } else if (real_width > c.clientWidth){
                    for(var x=0; x< <?php echo($T)?> ; x++){
                        //C[x].style.height = C[x].clientHeight - 1;
                        //C[x].clientHeight = C[x].style.height;
                        C[x].style.width = C[x].clientWidth - 1;
                        //C[x].clientWidth = C[x].style.width;
                        //console.log(C[x].clientWidth);
                    }
                }
                for(var x=0; x< <?php echo($T)?> ; x++){
                    C[x].style.width = c.clientWidth;
                    //C[x].style.height = c.clientHeight;
                    C[x].style.backgroundSize = elById("contents").clientWidth + "px " + (elById("contents").clientWidth*(6/9) - 4) + "px";
                    console.log(C[x].clientWidth);
                }

            //c.style.width = elById("contents");
            //c.clientWidth = c.style.width;
            //}
            //elById("contents").style.width = C[0].clientWidth;
            //elById("contents").style.width = "100%";
            //elById("contents").clientWidth = elById("contents").style.width;
            //real_width = elById("contents").clientWidth;
            //s_width = elById("main_container").clientWidth;
            startInterval(); // Repeat function
        }, .1401);
    }
</script>
<div id="contents" style="position: relative;">
    <div id="pt">
        <?php
            for($X=0; $X<$T; $X++){
                $nm=$A[$X];
                echo("<div id=\"img\" style=\"background-image: url('./parts/thumbs/$nm');\" alt=\"$nm\"></div>");
            }
        ?>
    </div>
</div>
<br>
<div id="rightPane">
    <p>This is a test</p>
</div>
<?php include("./footer.php");?>