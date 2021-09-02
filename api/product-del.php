<?php
    include("config/autoload.php");

    $p_id = $REQUEST->p_id;
    $sql = "
        DELETE FROM product WHERE p_id='".$p_id."'
    ";
    $obj = $DATABASE->Query($sql);

    echo json_encode(array(
        "status"=>true,
        "msg"=>"ลบข้อมูลแล้ว"
    ));
