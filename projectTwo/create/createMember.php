<?php
    include "../connect/connect.php";

    $sql = "CREATE TABLE myMember (";
    $sql .= "myMemberID int(10) unsigned NOT NULL auto_increment,";
    $sql .= "youName varchar(10) NOT NULL,";
    $sql .= "youGender enum('남자', '여자') DEFAULT NULL,";
    $sql .= "youID varchar(20) NOT NULL,";
    $sql .= "youPass varchar(20) NOT NULL,";
    $sql .= "youEmail varchar(20) NOT NULL,";
    $sql .= "youPhone varchar(20) NOT NULL,";
    $sql .= "regTime int(20) NOT NULL,";
    $sql .= "PRIMARY KEY (myMemberID)";
    $sql .= ") charset=utf8;";

    $connect -> query($sql);   
        
    
?>