<?php


class Notify
{
    private  function __construct(){}  
        
    static function AlertSuccess( $msg, $nextPageUrl="main.php" )
    {    
        echo '<div class="alert alert-success">' . $msg . '</div>';
        header('"Refresh: 3; URL="' . $nextPageUrl . '"');
    }
    
    static function error($msg , $nextPageUrl )
    {
        echo '<div class="alert alert-danger">' . $msg . '</div>';
        header('"Refresh: 3; URL="' . $nextPageUrl . '"');
    }

         /*
        http://php.net/manual/en/function.error-log.php
        bool error_log ( string $message [, int $message_type = 0 [, string $destination [, string $extra_headers ]]] )
        */
   


    static function log( $msg="An error occured", $killProcess=false )
    {
        if ( $GLOBALS['debugMode'] == true )
        {
            var_dump( $msg );
        }

        if( $killProcess == true )
        {
            die();
        }

    }

   

}




?>

