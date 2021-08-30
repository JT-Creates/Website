<head>
    <script src="./js/jquery.js" type="text/javascript"></script>
    <script>
        $(document).ready(function(){
        var setBodyScale=function(){
            var $body=$('body');
            var scaleFactor=0.1;
            var	scaleSource=$body.width();
            var	maxScale=100;
            var fontSize=scaleSource*scaleFactor;
            if (fontSize>maxScale)fontSize=maxScale;
                $('body').css('font-size',fontSize+'%');
            }
            $(window).resize(
                function(){
                    setBodyScale();
                }
            );
            setBodyScale();
        });
    </script>
    <style media="screen">
        textarea, body{
            font-family: Lucida Sans Typewriter,monaco,Consolas,"Lucida Console",monospace;
            font-weight:400;
            font-size:1em;
            line-height:1em;
            min-height:9em;
            max-height:9em;
            min-width:100%;
            max-width:100%;
            border:0;
            top:0;
            padding:.4%;
            margin:0;
            background-color:0;
            color:lime;
        }
    </style>
    <script>
    //cmd_emulator
        function cmd(s,extra1,extra2){
            document.body.style.overflow = 'hidden';
            if(s=="clr"){document.getElementById("cmdl").value="";a="";}
            else if(s=="quest1"){a=extra1+"Instructions: Answer the question then strike the enter key.\n\nHow many sides does a square have?\nSides=";}
            else if(s=="correct"){a="Correct! "+extra1+"\n\n";}
            else if(s=="incorrect"){a="Incorrect! "+extra1+"\n\n";}
            else if(s=="quest2"){a=extra1+"Instructions: Answer the question then press enter your keyboard.\n\nenter two numbers to compare:\nNumber 1: ";}
            else if(s=="quest2a"){a="Number 2: ";}
            else if(s=="greater"){a=extra2+" is less than "+extra1+"\n\n";}
            else if(s=="lesser"){a=extra1+" is less than "+extra2+"\n\n";}
            else if(s=="same"){a=extra1+" is equal to "+extra2;}
            else if(s=="quest3"){a=extra1+"Instructions: Answer the question then press enter your keyboard.\n\nguess number between 1 and 5: ";}
            else if(s=="same"){a=extra1+" is equal to "+extra2;}
            else if(s=="quest4"){a=extra1+"Instructions: Press any key to start do-while loop.\n\n";}
            else if(s=="Hello"){a+"Hello World!\n";}
            document.getElementById("cmdl").value+=a;
        }
        cmdt="";
        cmdtxt="";
        function m1(){
            cmd("quest1","\n");
            document.getElementById("cmdl").addEventListener('keyup', function (e)
            {
                key=e.keyCode;
                cmdt+=key;
                if(key==8){
                    cmdt="";
                }
                if(key==13){
                    cmd("clr");
                    item1="A square has 4 sides";
                    if(cmdt=="5213"){
                        cmd("correct",item1);
                    }else{
                        cmd("incorrect",item1);
                    }
                    cmd("quest1","");
                    cmdt="";
                }
            }, false);
        }
        function m2(){
            cmd("quest2","\n");
            input=1;
            document.getElementById("cmdl").addEventListener('keyup', function (f)
            {
                key=f.keyCode;
                if(key==13){
                    if(input==1){
                        n1=cmdt;
                        num1=cmdtxt;
                        cmd("quest2a");
                        cmdtxt="";
                        cmdt="";
                        input=2;
                    }
                    else{
                        n2=cmdt;
                        num2=cmdtxt;
                        cmd("clr");
                        if(n1<n2){
                            cmd("lesser",num1,num2);
                        }
                        else if(n1>n2){
                            cmd("greater",num1,num2);
                        }
                        else{
                            cmd("same",num1,num2);
                        }
                        cmd("quest2","\n\n");
                        cmdtxt="";
                        cmdt="";
                        input=1;
                    }
                }else{
                    cmdtxt+=String.fromCharCode(key);
                    cmdt+=key;
                }
            }, false);
        }
        function m3(){
            cmd("quest3","\n");
            var rn=Math.floor((Math.random()*5)+1);
            document.getElementById("cmdl").addEventListener('keyup', function (b)
            {
                key=b.keyCode;
                if(key==8){
                    cmdt="";
                }
                if(key===13){
                    cmd("clr");
                    if(cmdt<rn){
                        cmd("lesser",cmdt,"secret number");
                    }
                    else if(cmdt>rn){
                        cmd("greater",cmdt,"secret number");
                    }
                    else{
                        cmd("correct",("The answer was "+rn));
                        rn=Math.floor((Math.random()*5)+1);
                    }
                    cmd("quest3","");
                    cmdt="";
                }
                else {
                    cmdt=key-48;
                }
            }, false);
        }
        function m4() {
            cmd("quest4","\n");
            document.getElementById("cmdl").addEventListener('keyup', function(){key;}, false);
            function key() {
                var a=0;
                while(a<10){
                    cmd("Hello");
                    a++;
                }
                cmd("clr");
                cmd("quest4","\n");
                a=0;
            }
        }
    </script>
</head>
<body <?php
if($_GET['load']=="cmd1") {
    echo("onload=\"m1();\"");
}
else if($_GET['load']=="cmd2") {
    echo("onload=\"m2();\"");
}
else if($_GET['load']=="cmd3"){
    echo("onload=\"m3();\"");
}
else if($_GET['load']=="cmd4"){
    echo("onload=\"m4();\"");
}
?>><textarea id="cmdl">DISCLAIMER: I programed this webapp in JS to emulate the C++ code above. It only supports PCs and Macs.</textarea><a href="downloads/" target="_Download">Download emulated C++ file</a>
</body>
<?php echo(file_get_contents("../footer.php"));?>