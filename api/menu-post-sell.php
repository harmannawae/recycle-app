<?php
    include("config/autoload.php");

    $id = $DATABASE->QueryMaxId("member_sell", "id");
    $type = $REQUEST->type;
    $weight = $REQUEST->weight;
    $user_id = @$REQUEST->user_id;//เพื่อให้ข้อมูล 2 table เชื่อมโยงกัน

    CheckValue($type, "คุณยังไม่ได้เลือก type");



    $sql = "
        INSERT INTO member_sell (
            id, 
            type,
            weight,
            user_id
        ) VALUES (
            '".$id."', 
            '".$type."',
            '".$weight."',
            '".$user_id."'
        )
    ";
    $obj = $DATABASE->Query($sql);

    echo json_encode(array(
        "status"=>true,
        "msg"=>"ลงขายสำเร็จ"
    ));
