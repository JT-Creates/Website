<?php
$D=opendir(".");
while($N=readdir($D)){
    if($N != "latestcode.php"){
        if(substr("$N",-10)=="latest.BAT"){
            $latest=$N;
            
        }
        
    }
    
}
      // All form data is in $_POST

      // Now perform actions on form data here and 
      // create an result array something like this
      $arr = array( 'result' => file_get_contents("./$latest") );
      echo json_encode( $arr );
?>