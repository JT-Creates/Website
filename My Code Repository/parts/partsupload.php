<?php
    $_POST['p']='Parts Upload';
    $_POST['r']='2';
    include("../banner.php");
?>
<style>
    input {
        border-radius: 2px;
        margin: 1pt;
        padding: 1pt;
        margin-bottom: 0.5em;
        border: 1px solid #eee;
        background-color: #fff;
        width: 90%;
    }
    form {
        border-radius: 5px;
        margin: 10px;
        padding: 10px;
        text-align: left;
        background-color: #ddd;
        width: 16em;
    }
</style>
<p>Sory we did not have what your looking for. If you whant to add parts to the site simply fill out the form bellow.</p>
<form action="action.php" method="post" id="contents">
    <h2 style="margin-top:0;">New Part Entry</h2>
    <span>Your name:<br/><input placeholder="your name..." required type="text" name="ynam" /></span><br>
    <span>Part name:<br/><input placeholder="general name..." required type="text" name="nam" /></span><br>
    <span>Manufacturer:<br/><input placeholder="Manufacturer..." required type="text" name="mf" /></span><br>
    <span>Id, serial, or model #:<br/><input placeholder="Id/model/serial number..." required type="text" name="pn" /></span><br>
    <span>catagory:<br/><input placeholder="catagory..." required type="text" name="cat" /></span><br>
    <span>part summery:<br/><input placeholder="summery..." required type="text" name="sum" /></span><br>
    <span>part description:<br/><input placeholder="Description..." required type="text" name="inf"></input></span><br>
    <span>part datasheet link:<br/><input placeholder="https://example.com" required type="url" name="dts" /></span><br><br>
    <span><input type="submit" style="width:auto;"/><span>&emsp;</span><input style="width:auto;" type="reset" /></span><br>
</form>
<?php echo(file_get_contents("../footer.php"));?>