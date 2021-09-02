<?php
    include("config/autoload.php");

    $p_id = $DATABASE->QueryMaxId("product", "p_id");
    $p_name = $REQUEST->p_name;
    $p_price = $REQUEST->p_price;
     //เรียกฟั่งชั่นดักจับคนไม่กรอกข้อมูล ที่เรากำหนดฟั่งชั่นหน้า autoload 
    CheckValue($p_name, "คุณยังไม่ได้ป้อนรายการ");
    CheckValue($p_price, "คุณยังไม่ได้ระบุราคา");
    $sql = "
        INSERT INTO product (
            p_id, 
            p_name,
            p_price
        ) VALUES (
            '".$p_id."', 
            '".$p_name."',
            '".$p_price."'
        )
    ";
    $obj = $DATABASE->Query($sql);

    echo json_encode(array(
        "status"=>true,
        "msg"=>"เพิ่มรายการสำเร็จ"
    ));
