<?php
case 'findPW':
    $youName = $_POST['youName'];
    $youID = $_POST['youID'];
    $youEmail = $_POST['youEmail'];

    $sql = $db -> prepare("SELECT * FROM register WHERE youID=:youID");
    $sql -> bindParam("youID",$youID);
    $sql -> execute();
    $row = $sql -> fetch();
    
    if(!$row){
        echo("없는 아이디입니다.");
    } else if($youEmail != $row['youEmail']){
        echo("이메일을 확인해주세요");
    } else{
        echo 
        "<script>
            location.href='changePw.php?youID=".$row['youID']."';
        </script>";
    }
break;
?>