<?php
    include("config/autoload.php");

    $id = $DATABASE->QueryMaxId("order_history", "id");
    $type = $REQUEST->type;
    $weight= $REQUEST->weight;
    $user_id = $REQUEST->user_id;
    $user_order = @$REQUEST->order;//เพื่อให้ข้อมูล 2 table เชื่อมโยงกัน
    $sql = "
    INSERT INTO order_history (
        id,
        type,
        weight,
        user_id,
        user_order
    ) VALUES (
        '".$id."',
        '".$type."',
        '".$weight."',
        '".$user_id."',
        '".$user_order."'
    )
";
    $obj = $DATABASE->Query($sql);

    echo json_encode(array(
        "status"=>true,
        "msg"=>"[บันทึกข้อมูลเรียบร้อย]"
    ));