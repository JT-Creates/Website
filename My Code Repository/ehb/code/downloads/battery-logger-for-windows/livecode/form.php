<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script>jQuery(document).ready(function(){

    jQuery('.ajaxform').submit( function() {

        $.ajax({
            url     : $(this).attr('action'),
            type    : $(this).attr('method'),
            dataType: 'json',
            data    : $(this).serialize(),
            success : function( data ) {
                        // loop to set the result(value)
                        // in required div(key)
                        for(var id in data) {
                            jQuery('#' + id).html( data[id] );
                        }
                      }
        });

        return false;
    });

});
var timer, delay = 500;

timer = setInterval(function(){
    $.ajax({
      type    : 'POST',
      url     : 'profile.php',
      dataType: 'json',
      data    : $('.ajaxform').serialize(),
      success : function(data){
                  for(var id in data) {
                    jQuery('#' + id).html( data[id] );
                  }
                }
    });
}, delay);</script>
<body><form action='profile.php' method='post' class='ajaxform'>
</form>

<div id='result'>Result comes here..</div></body>