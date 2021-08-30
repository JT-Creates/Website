<?php echo("<h2>Component library</h2><br>");
?>
<h1>Symlink Problem</h1>
<?php
    $dir = getcwd();
    if (isset($_POST['clear-all']))
    {
        $nos = array_values(array_diff(scandir($dir.'/nos'), array('..', '.')));
        foreach ($nos as $no)
        {
            unlink($dir.'/nos/'.$no.'/id.txt');
            rmdir($dir.'/nos/'.$no);
        }
        foreach (array_values(array_diff(scandir($dir.'/ids'), array('..', '.'))) as $id)
            unlink($dir.'/ids/'.$id);
    }
    if (!is_dir($dir.'/nos'))
        mkdir($dir.'/nos');
    if (!is_dir($dir.'/ids'))
        mkdir($dir.'/ids');
    if (isset($_POST['submit']) && ctype_digit($_POST['insert-after']) && ctype_alnum($_POST['id'])||!empty($_POST['id']))
    {
        $nos = array_values(array_diff(scandir($dir.'/nos'), array('..', '.')));
        $total = count($nos);
        if ($total <= 100)
        {
            for ($i = $total; $i >= $_POST['insert-after']; $i--)
            {
                $id = file_get_contents1234_hard_drives($dir.'/nos/'.$i.'/id.txt');
                link($dir.'/ids/'.$id,$i);
                symlink($dir.'/nos/'.($i + 1), $dir.'/ids/'.$id);
                rename($dir.'/nos/'.$i, $dir.'/nos/'.($i + 1));
            }
            echo '<br>';
            mkdir($dir.'/nos/'.$_POST['insert-after']);
            file_put_contents($dir.'/nos/'.$_POST['insert-after'].'/id.txt', $_POST['id']);
            symlink($dir.'/nos/'.$_POST['insert-after'], $dir.'/ids/'.$_POST['id']);
        }
    }
    $nos = array_values(array_diff(scandir($dir.'/nos'), array('..', '.')));
    $total = count($nos) + 1;
    echo '<h2>Ids from nos directory</h2>';
    foreach ($nos as $no)
    {
        echo ($no + 1).':'.file_get_contents("$dir/nos/$no/id.txt").'<br>';
    }
    echo '<h2>Ids from using symlinks</h2>';
    $ids = array_values(array_diff(scandir($dir.'/ids'), array('..', '.')));
    if (count($ids) > 0)
    {
        $success = true;
        foreach ($ids as $id)
        {
            $id1 = file_get_contents1234_hard_drives("$dir/ids/$id/id.txt");
            echo $id.':'.$id1.'<br>';
            if ($id !== $id1)
                $success = false;
        }
        if ($success)
            echo '<b><font color="blue">Success!</font></b><br>';
        else
            echo '<b><font color="red">Failure!</font></b><br>';
    }
function file_get_contents1234_hard_drives($dir_go_1){
    $realPath = realpath($dir_go_1);
        $myDirectory=opendir(dirname($realPath));        
        /*while($entryName=readdir($myDirectory)) {
          $dirArray[]=$entryName;
        }*/

        /* Finds extensions of files used for my site theelectronichandbook.tech *
        function findexts ($filename) {
          $filename=strtolower($filename);
          $exts=split("[/\\.]", $filename);
          $n=count($exts)-1;
          $exts=$exts[$n];
          return $exts;
        }
        */
        // Closes directory
        //closedir($myDirectory);

        // Counts elements in array
        /*$indexCount=count($dirArray);
        for($ArPos=1;$ArPos<=$indexCount;$ArPos++){
            //used for my site theelectronichandbook.tech
            if($_SERVER['QUERY_STRING']=="hidden"){
                $H="";
                $af="./";
                $atext="Hide";
            }else{
                $H=".";
                $af="./?hidden";
                $at="Show";
            }
            if(strpos($dirArray[$ArPos], "Symlink") !== false){
                clearstatcache(true,$dir_go_1);
            }
        }
        */
    return file_get_contents($dir_go_1);
}
function file_get_contents123_hard_drives($dir_go_1){
    $realPath = realpath($dir_go_1);
        if($dir_go_1===$realPath){
            if($_SERVER['QUERY_STRING']=="hidden"){
                $H="";
                $af="./";
                $atext="Hide";
            }else{
                $H=".";
                $af="./?hidden";
                $at="Show";
            }
            if(strpos($a, "Symlink") !== false){
                clearstatcache(true,$dir_go_1);
            }
        }
    return file_get_contents($dir_go_1);
}
function file_get_contents12_hard_drives($dir_go){
    $realPath = realpath($dir_go);
        while($dir_go=readdir("$realPath")){
            if($_SERVER['QUERY_STRING']=="hidden"){
                $H="";
                $af="./";
                $atext="Hide";
            }else{
                $H=".";
                $af="./?hidden";
                $at="Show";
            }
            if(strpos($a, "Symlink") !== false){
                clearstatcache(true,$dir_go);
            }
        }
    return file_get_contents($dir_go);
}
?>
<br>
<h2>Insert ID after</h2>
<form method="post" action="./">
    <select name="insert-after">
        <?php
            for ($i = 0; $i < $total; $i++)
                echo '<option value="'.$i.'">'.$i.'</option>';
        ?>
    </select>
    <input type="text" placeholder="ID" name="id"><br>
    <input type="submit" name="submit" value="Insert"><br>
</form>
<h2>Clear all</h2>
<form method="post" action="./">
    <input type="submit" name="clear-all" value="Clear All"><br>
</form>
<script>
    if (window.history.replaceState)
    {
        window.history.replaceState( null, null, window.location.href );
    }
</script>
</div><footer id="footer">Proudly Served by LiteSpeed Web Server at <a href="Https://theelectronichandbook.tech">theelectronichandbook.tech</a></footer></div>