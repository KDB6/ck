<?php
    include "../connect/connect.php";
    include "../connect/session.php";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php

        $myBoardID = $_POST['myBoardID'];
        $youName = $_POST['youName'];
        $youEmail = $_POST['youEmail'];


        // echo $youName;
        // echo $youEmail;

        $sql = "SELECT youID FROM myMember WHERE (youName = '{$youName}' && youEmail = '{$youEmail}')";
        $result = $connect -> query($sql);


    //     $one = mysqli_fetch_array($result);

    //     echo "<script>
    //     post_to_url('findID_confirm.php', {'youID': ".$one['youID']."});

    //     function post_to_url(path, params, method) {
    //         method = method || 'post';
    //         const form = document.createElement('form');
    //         form.setAttribute('method', method);
    //         form.setAttribute('action', path);
    //         for(let key in params) {
    //             let hiddenField = document.createElement('input');
    //             hiddenField.setAttribute('type', 'hidden');
    //             hiddenField.setAttribute('name', key);
    //             hiddenField.setAttribute('value', params[key]);
    //             form.appendChild(hiddenField);
    //         }
    //         document.body.appendChild(form);
    //         form.submit();
    //     }
    //     </script>";

    //     if($result){
    //         echo "<script>alert('이름 혹은 이메일이 틀렸습니다!')</script>";
    //         echo "<script>location.href='findID_email.php';</script>";
    //     } else {
    //         echo "<script>location.href='findID_confirm.php';</script>";
    //     }
    // ?>
</body>
<script>
    
</script>
</html>