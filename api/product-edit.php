<?php
    include("config/autoload.php");

    $p_id = $REQUEST->p_id;
    $p_name = $REQUEST->p_name;
    $p_price = $REQUEST->p_price;
    $sql = "
        UPDATE product SET
            p_name='".$p_name."',
            p_price='".$p_price."'
        WHERE p_id='".$p_id."'
    ";
    $obj = $DATABASE->Query($sql);

    echo json_encode(array(
        "status"=>true,
        "msg"=>"แก้ไขข้อมูลแล้ว"
    ));
