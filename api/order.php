<?php
    include("config/autoload.php");

    $d_id = $DATABASE->QueryMaxId("order", "d_id");
    $d_type = $REQUEST->o_type;
    $d_price = $REQUEST->d_price;
    $d_weight = $REQUEST->d_weight;
    $d_totalprice = $REQUEST->d_totalprice;
    $user_id = $REQUEST->user_id;//เพื่อให้ข้อมูล 2 table เชื่อมโยงกัน

    CheckValue($type, "คุณยังไม่ได้เลือก type");



    $sql = "
        INSERT INTO order (
            d_id, 
            d_type,
            d_price,
            d_weight,
            d_totalprice,
            user_id
        ) VALUES (
            '".$d_id."', 
            '".$d_type."',
            '".$d_price."',
            '".$d_weight."',
            '".$d_totalprice."',
            '".$user_id."'
        )
    ";
    $obj = $DATABASE->Query($sql);

    echo json_encode(array(
        "status"=>true,
        "msg"=>"ลงขายสำเร็จ"
    ));
