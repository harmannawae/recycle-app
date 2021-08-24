<?php
    include("config/autoload.php");

    $id = $REQUEST->id;

    $sql = "SELECT * 
    FROM member_sell 
    INNER JOIN user 
    ON member_sell.user_id = user.user_id WHERE id='".$id."' "; //คำสั่งดึงตาราง2ตารางมาเชื่อมกัน

    $obj = $DATABASE->QueryObj($sql);

    echo json_encode(array(
        "status"=>true,
        "data"=>$obj[0]
    ));
