<?php
    include("config/autoload.php");

    $user_id = $REQUEST->user_id;
    $sql = "
        DELETE FROM user WHERE user_id='".$user_id."'
    ";
    $obj = $DATABASE->Query($sql);

    echo json_encode(array(
        "status"=>true,
        "msg"=>"ลบข้อมูลแล้ว"
    ));
