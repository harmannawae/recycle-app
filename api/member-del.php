<?php
    include("config/autoload.php");

    $member_id = $REQUEST->member_id;
    $sql = "
        DELETE FROM member WHERE member_id='".$member_id."'
    ";
    $obj = $DATABASE->Query($sql);

    echo json_encode(array(
        "status"=>true,
        "msg"=>"ลบข้อมูลแล้ว"
    ));
