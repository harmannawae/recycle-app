<?php
    include("config/autoload.php");

    $id = $REQUEST->id;

    $sql = "SELECT * FROM member_sell WHERE id='".$id."' ";

    $obj = $DATABASE->QueryObj($sql);

    echo json_encode(array(
        "status"=>true,
        "data"=>$obj[0]
    ));
