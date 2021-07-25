<?php
    include("config/autoload.php");

    $s_id = $DATABASE->QueryMaxId("menu_sell", "s_id");
    $s_img = $REQUEST->s_img;
    $s_type = $REQUEST->s_type;
    $s_weight = $REQUEST->s_weight;
    $s_address = $REQUEST->s_address;
    $sql = "
        INSERT INTO menu_sell (
            s_id,
            s_img,
            s_type,
            s_weight,
            s_address
        ) VALUES (
            '".$s_id."', 
            '".$s_img."',
            '".$s_type."',
            '".$s_weight."',
            '".$s_address."'
           
        )
    ";
    $obj = $DATABASE->Query($sql);

    echo json_encode(array(
        "status"=>true,
        "msg"=>"ลงขาย"
    ));
