<?php
    include("config/autoload.php");

    $id = $REQUEST->id;
    $sql = "
        DELETE FROM member_sell WHERE id='".$id."'
    ";
    $obj = $DATABASE->Query($sql);

    echo json_encode(array(
        "status"=>true,
        "msg"=>".."
    ));
