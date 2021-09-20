<?php
    include("config/autoload.php");

    $n_id = $REQUEST->n_id;
    $n_title = $REQUEST->n_title;
    $n_name = $REQUEST->n_name;
    $n_content = $REQUEST->n_content;
    $image = $REQUEST->image;
    $sql = "
        UPDATE newspaper SET
            n_title='".$n_title."',
            n_name='".$n_name."',
            n_content='".$n_content."',
            image='".$image."'
        WHERE n_id='".$n_id."'
    ";
    $obj = $DATABASE->Query($sql);

    echo json_encode(array(
        "status"=>true,
        "msg"=>"แก้ไขข้อมูลแล้ว"
    ));
