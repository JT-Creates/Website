<!DOCTYPE html>
<!-- saved from url=(0040)http://www.endmemo.com/chem/balancer.php -->
<html>
    <head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width; initial-scale=1.0">
<script language="javascript" src="searchajax.js"></script>
<script language="javascript"> 
document.onclick = onMainClick; 
function onMainClick(ev){document.getElementById('mainsearch_suggest').innerHTML = '';}
</script>
<title>Chemical Equation Balancer Online</title>
<meta name="keywords" content="Chemical Equation Balancer">
<meta name="description" content="Balance or Check the Balance of Chemical Equations Online">
<script language="JavaScript" src="balancer_ajax.js"></script>
<style type="text/css">
.tb td{text-align:center;font-size:14px;color: #444444;BORDER-COLLAPSE: collapse;width:32px;cursor:default}	
.nonmetal{background-color: lightgreen;BORDER-TOP: #3F34FF 2px solid;BORDER-LEFT: #3F34FF 2px solid;}
.noble{	background-color: lightblue;BORDER-TOP: #3F34FF 2px solid;BORDER-LEFT: #3F34FF 2px solid;}
.halogens{background-color: lightseagreen;BORDER-TOP: #3F34FF 2px solid;BORDER-LEFT: #3F34FF 2px solid;}
.othernonmetal{background-color: lightgrey;BORDER-TOP: #3F34FF 2px solid;BORDER-LEFT: #3F34FF 2px solid;}
.metal{background-color: lightpink;BORDER-TOP: #3F34FF 2px solid;BORDER-LEFT: #3F34FF 2px solid;}
.transitionmetal{background-color: #ddB6C1;BORDER-TOP: #3F34FF 2px solid;BORDER-LEFT: #3F34FF 2px solid;}
.alkali{background-color: #ff9900;BORDER-TOP: #3F34FF 2px solid;BORDER-LEFT: #3F34FF 2px solid;}
.alkaliearth{background-color: yellow;BORDER-TOP: #3F34FF 2px solid;BORDER-LEFT: #3F34FF 2px solid;}
.lanthanoids{background-color: #ffd6C1;width:32px;text-align:center;font-size:14px;BORDER-TOP: #3F34FF 2px solid;BORDER-LEFT: #3F34FF 2px solid;}
.actinoids{background-color: #ffc6d1;BORDER-TOP: #3F34FF 2px solid;BORDER-LEFT: #3F34FF 2px solid;BORDER-BOTTOM: #3F34FF 2px solid;}				
.nm{BORDER-TOP: #3F34FF 2px solid;BORDER-LEFT: #3F34FF 2px solid;}
gr{color: green;font-weight:bold}
rd{color: red;}
bl{color: blue;}
</style>
<script language="javascript">
var arreqs = new Array();
function K_IO(str)
{
    if (str == "3-"
	    || str == "2-"
	    || str == "1-"
	    || str == "1+"
	    || str == "2+"
	    || str == "3+"
	)
	{
	     document.bal.equation.value += "{" + str + "}";
	}
	else
	     document.bal.equation.value += str;
	document.bal.equation.focus();
}
document.onclick = onClick; 
function onClick(ev) 
{ 
} 
function changeCell(td)
{
    td.style.background="#bbbbbb";
	td.onmouseout=function() 
	{
	   td.style.background="#ffffff";
	}
}
function clearbal()
{
    alert("good");
    document.bal.equation.value="";
	var ss = document.getElementById('yn');
	ss.innerHTML = "";
	var ss2 = document.getElementById('sh');
	ss2.innerHTML = "";
 	document.bal.equation.focus();
}
</script>
<script>
function redo()
{
   alert("redo");
   re = re + 1;
   if (re >= sg1.length-1)
   {
      re = sg1.length-1;
	  document.cs.redo2.disabled = true;	  
   }
   un = re;
   document.cs.undo2.disabled = false;	  
    document.cs.g1.value = sg1[re];
	document.cs.se.value=sse[re];
	document.cs.mean.value=smean[re];
	document.cs.sd.value=ssd[re];
	document.cs.v.value=sv[re];
	document.cs.median.value = smedian[re];
	document.cs.n.value = sn[re];
}
</script>
<script>
function undo()
{
   alert("undo");
   un = un -1;
   if (un <= 0)
   {
      un = 0;
	  document.cs.undo2.disabled = true;
   }
   re = un;
   document.cs.redo2.disabled = false;	
    document.cs.g1.value = sg1[un];
	document.cs.se.value=sse[un];
	document.cs.mean.value=smean[un];
	document.cs.sd.value=ssd[un];
	document.cs.v.value=sv[un];
	document.cs.median.value = smedian[un];
	document.cs.n.value = sn[un];
}
</script>
<script>
function ready(){
var xi=document.getElementById('IO_1');
var xii=document.getElementById('IO_2');
xii.style.display="none";
xi.style.display="block";
alert("ready");
}</script>
<script>
var IO_mode=0;
    function IO_Select(){
        if{IO_mode==0){
            xi.style.display="none";
            xii.style.display="block";
            IO_mode=1;
        } if(IO_mode==1){
            xi.style.display="block";
            xii.style.display="none";
            IO_mode=0;
        }
    }
}
</script>
</head>
<body onload="ready()">
<div class="cmtable">			
<table class="tb" width="512" cellspacing="0" cellpadding="0"><tbody>
<tr>
<td class="nonmetal" title="esc" style="BORDER-RIGHT: #3F34FF 2px solid;" onclick="K_IO('esc')">esc
</td><td width="32">
</td><td class="nm" onclick="K_IO('~')">~
</td><td class="nm" onclick="K_IO('!')">!
</td><td class="nm" onclick="K_IO('@')">@
</td><td class="nm" onclick="K_IO('#')">#
</td><td class="nm" onclick="K_IO('$')">$
</td><td class="nm" onclick="K_IO('%')">%
</td><td class="nm" onclick="K_IO('^')">^
</td><td class="nm" onclick="K_IO('&')">&
</td><td class="nm" onclick="K_IO('*')">*
</td><td class="nm" onclick="K_IO('(')">(
</td><td class="nm" onclick="K_IO(')')">)	
</td><td class="nm" onclick="K_IO('_')">_	
</td><td class="nm" style="BORDER-RIGHT: #3F34FF 2px solid;" onclick="K_IO('+')">+	
</td><td colspan="1"> 
</td><td class="noble" title="2 Helium MW 4.002602" style="BORDER-RIGHT: #3F34FF 2px solid;" onclick="undo()">⇤
</td></tr>
<!-- ⌘ ⏎ ⌫ ‽ ⁂ ‡ ⌨ ⎋ ⌦ ⇤-->
<tr>
<td class="nonmetal" title="delete" style="BORDER-RIGHT: #3F34FF 2px solid;" onclick="K_IO('del')">del
</td><td width="32">
</td><td id="IO_1" class="nm" onclick="K_IO('`')">`</td><td id="IO_2" class="nm" onclick="K_IO('~')">~</td>
<td class="nm" onclick="K_IO('0')">0
</td><td class="nm" onclick="K_IO('1')">1
</td><td class="nm" onclick="K_IO('2')">2
</td><td class="nm" onclick="K_IO('3')">3
</td><td class="nm" onclick="K_IO('4')">4
</td><td class="nm" onclick="K_IO('5')">5
</td><td class="nm" onclick="K_IO('6')">6
</td><td class="nm" onclick="K_IO('7')">7
</td><td class="nm" onclick="K_IO('8')">8
</td><td class="nm" onclick="K_IO('9')">9	
</td><td class="nm" onclick="K_IO('-')">-	
</td><td class="nm" style="BORDER-RIGHT: #3F34FF 2px solid;" onclick="K_IO('=')">=		
</td><td colspan="1">
</td><td class="noble" title="2 Helium MW 4.002602" style="BORDER-RIGHT: #3F34FF 2px solid;" onclick="K_IO('He')">He</td></tr>
<tr>
<td class="alkali" title="3 Lithium MW 6.941" onclick="K_IO('f1')">F1
</td><td class="alkaliearth" title="4 Beryllium MW 9.012182" style="BORDER-RIGHT: #3F34FF 2px solid;" onclick="K_IO('alt1')">⌘1
</td><td class="halogens" title="5 Boron MW 10.811" onclick="K_IO('B')">B
</td><td class="metal" title="6 Carbon MW 12.0107" onclick="K_IO('C')">C
</td><td class="metal" title="7 Nitrogen MW 14.0067" onclick="K_IO('N')">N
</td><td class="metal" title="8 Oxygen MW 15.9994" onclick="K_IO('O')">O
</td><td class="metal" title="9 Fluorine MW 18.9984032" onclick="K_IO('F')">F
</td><td class="metal" title="9 Fluorine MW 18.9984032" onclick="K_IO('F')">F
</td><td class="metal" title="9 Fluorine MW 18.9984032" onclick="K_IO('F')">F
</td><td class="metal" title="9 Fluorine MW 18.9984032" onclick="K_IO('F')">F
</td><td class="metal" title="11 Sodium MW 22.98976" onclick="K_IO('Na')">Na
</td><td class="metal" title="13 Aluminium MW 26.9815386" onclick="K_IO('Al')">Al
</td><td class="metal" title="14 Silicon MW 28.0855" onclick="K_IO('Si')">Si
</td><td class="nonmetal" title="15 Phosphorus MW 30.973762" onclick="K_IO('P')">P
</td><td class="nonmetal" title="16 Sulfur MW 32.065" onclick="K_IO('S')">S
</td><td class="halogens" title="17 Chlorine MW 35.453" onclick="K_IO('Cl')">Cl
</td><td class="noble" title="18 Argon MW 39.948" style="BORDER-RIGHT: #3F34FF 2px solid;" onclick="K_IO('Ar')">Ar
</td></tr>
<tr>
<td class="alkali" title="19 Potassium MW 39.0988" onclick="K_IO('K')">K
</td><td class="alkaliearth" title="20 Calcium MW 40.078" onclick="K_IO('Ca')">Ca
</td><td class="metal" title="21 Scandium MW 44.966912" onclick="K_IO('Sc')">Sc
</td><td class="metal" title="22 Titanium MW 47.867" onclick="K_IO('Ti')">Ti
</td><td class="metal" title="23 Vanadium MW 50.9415" onclick="K_IO('V')">V
</td><td class="metal" title="24 Chromium MW 51.9961" onclick="K_IO('Cr')">Cr
</td><td class="metal" title="25 Manganese MW 54.938045" onclick="K_IO('Mn')">Mn
</td><td class="metal" title="27 Cobalt MW 58.933195" onclick="K_IO('Co')">Co
</td><td class="metal" title="28 Nickel MW 58.6934" onclick="K_IO('Ni')">Ni
</td><td class="metal" title="29 Copper MW 63.546" onclick="K_IO('Cu')">Cu
</td><td class="metal" title="30 Zinc MW 65.38" onclick="K_IO('Zn')">Zn
</td><td class="transitionmetal" title="31 Gallium MW 69.723" onclick="K_IO('Ga')">Ga
</td><td class="othernonmetal" title="32 Germanium MW 72.64" onclick="K_IO('Ge')">Ge
</td><td class="othernonmetal" title="33 Arsenic MW 74.92160" onclick="K_IO('As')">As
</td><td class="nonmetal" title="34 Selenium MW 78.96" onclick="K_IO('Se')">Se
</td><td class="halogens" title="35 Bromine MW 79.904" onclick="K_IO('Br')">Br
</td><td class="noble" title="36 Krypton MW 83.798" style="BORDER-RIGHT: #3F34FF 2px solid;" onclick="K_IO('Kr')">Kr
</td></tr>
<tr>
<td class="alkali" title="37 Rubidium MW 85.4678" onclick="K_IO('Rb')">Rb
</td><td class="alkaliearth" title="38 Strontium MW 87.62" onclick="K_IO('Sr')">Sr
</td><td class="metal" title="39 Yttrium MW 88.90585" onclick="K_IO('Y')">Y
</td><td class="metal" title="40 Zirconium MW 91.224" onclick="K_IO('Zr')">Zr
</td><td class="metal" title="41 Niobium MW 92.90638" onclick="K_IO('Nb')">Nb
</td><td class="metal" title="42 Molybdenum MW 95.96" onclick="K_IO('Mo')">Mo
</td><td class="metal" title="43 Technetium MW 98" onclick="K_IO('Tc')">Tc
</td><td class="metal" title="44 Ruthenium MW 101.07" onclick="K_IO('Ru')">Ru
</td><td class="metal" title="46 Palladium MW 106.42" onclick="K_IO('Pd')">Pd
</td><td class="metal" title="47 Silver MW 107.8682" onclick="K_IO('Ag')">Ag
</td><td class="metal" title="48 Cadmium MW 112.411" onclick="K_IO('Cd')">Cd
</td><td class="transitionmetal" title="49 Indium MW 114.818" onclick="K_IO('In')">In
</td><td class="transitionmetal" title="50 Tin MW 118.710" onclick="K_IO('Sn')">Sn
</td><td class="othernonmetal" title="51 Antimony MW 121.760" onclick="K_IO('Sb')">Sb
</td><td class="othernonmetal" title="52 Tellurium MW 127.60" onclick="K_IO('Te')">Te
</td><td class="halogens" title="53 Iodine MW 126.90447" onclick="K_IO('I')">I
</td><td class="noble" title="54 Xenon MW 131.293" style="BORDER-RIGHT: #3F34FF 2px solid;" onclick="K_IO('Xe')">Xe
</td></tr>
<tr>
<td class="alkali" title="55 Caesium MW 132.9054" onclick="IO_Select()">2nd
</td><td class="alkaliearth" title="56 Barium MW 137.327" onclick="K_IO('Ba')">Ba
</td><td title="La-Lu, 15 elements" class="nm">Las
</td><td class="metal" title="72 Hafnium MW 178.49" onclick="K_IO('Hf')">Hf
</td><td class="metal" title="73 Tantalum MW 180.94788" onclick="K_IO('Ta')">Ta
</td><td class="metal" title="74 Tungsten MW 183.84" onclick="K_IO('W')">W
</td><td class="metal" title="75 Rhenium MW 186.207" onclick="K_IO('Re')">Re
</td><td class="metal" title="77 Iridium MW 192.217" onclick="K_IO('Ir')">Ir
</td><td class="metal" title="78 Platinum MW 195.084" onclick="K_IO('Pt')">Pt
</td><td class="metal" title="79 Gold MW 196.966569" onclick="K_IO('Au')">Au
</td><td class="metal" title="80 Mercury MW 200.59" onclick="K_IO('Hg')">Hg
</td><td class="transitionmetal" title="81 Thallium MW 204.3833" onclick="K_IO('Tl')">Tl
</td><td class="transitionmetal" title="82 Lead MW 207.2" onclick="K_IO('Pb')">Pb
</td><td class="transitionmetal" title="83 Bismuth MW 208.98040" onclick="K_IO('Bi')">Bi
</td><td class="othernonmetal" title="84 Polonium MW (209)" onclick="K_IO('Po')">Po
</td><td class="halogens" title="85 Astatine MW (210)" onclick="K_IO('At')">At
</td><td class="noble" title="86 Radon MW (222)" style="BORDER-RIGHT: #3F34FF 2px solid;" onclick="K_IO('Rn')">Rn
</td></tr>
<tr><td colspan="512" style="BORDER-TOP: #3F34FF 2px solid;"></td></tr>
</tbody></table>
</div>
<form name="bal" action="Keyboard.php" method="post"> 
<div class="cmline">
	<input type="submit" name="submit1" style="font-size:15px;height:30px" value=" Balance "> 
	<input type="submit" name="submit2" style="font-size:15px;height:30px" value=" Check "> 
	<input onclick="clearbal()" style="font-size:15px;height:30px" type="button" value=" Clear ">
	</div><font color="green">		
<div class="msch" style="position:relative;">
<?php $Val=$_POST['equation'];echo"<input name='equation' id='equtxt' autocomplete='off' value='$Val' type='text'>";?>
</div>
</font></form></body>