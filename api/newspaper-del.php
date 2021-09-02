<?php
    include("config/autoload.php");

    $n_id = $REQUEST->n_id;
    $sql = "
        DELETE FROM newspaper WHERE n_id='".$n_id."'
    ";
    $obj = $DATABASE->Query($sql);

    echo json_encode(array(
        "status"=>true,
        "msg"=>"ลบข้อมูลแล้ว"
    ));
