<?php
    $host = "localhost";
    $user = "leesh3432";
    $pass = "gkrtks12!";
    $db = "leesh3432";
    $connect = new mysqli($host, $user, $pass, $db);
    $connect -> set_charset("utf8");
 mysqli::__construct(): (HY000\1045): Access denied for user 'leesh3432'@'localhost' (using password: YES) in \host\home5\ipkg72102\html\project\connect\connect.php on line 6
    if(mysqli_connect_errno()){
        echo "Database Connect False";
    } else {
        echo "Database Connect True";
    }


?>