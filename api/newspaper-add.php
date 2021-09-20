<?php
    include("config/autoload.php");

    $n_id = $DATABASE->QueryMaxId("newspaper", "n_id");
    $n_title = $REQUEST->n_title;
    $n_name = $REQUEST->n_name;
    $n_content = $REQUEST->n_content;
     //เรียกฟั่งชั่นดักจับคนไม่กรอกข้อมูล ที่เรากำหนดฟั่งชั่นหน้า autoload 
    CheckValue($n_title, "คุณยังไม่ได้เลือกหัวข้อ");
    CheckValue($n_name, "คุณยังไม่ได้ป้อนชื่อ");
    CheckValue($n_content, "คุณยังไม่ได้ป้อนเนื้อหา");
    $sql = "
        INSERT INTO newspaper (
            n_id,
            n_title,
            n_name,
            n_content,
            image
        ) VALUES (
            '".$n_id."', 
            '".$n_title."',
            '".$n_name."',
            '".$n_content."',
            'assets/img/map.png'
        )
    ";
    $obj = $DATABASE->Query($sql);

    echo json_encode(array(
        "status"=>true,
        "msg"=>"เพิ่มรายการสำเร็จ"
    ));
