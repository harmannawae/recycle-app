<?php
    include("config/autoload.php");

    $user_id = $REQUEST->user_id;

    $sql = "SELECT * FROM user WHERE user_id='".$user_id."' ";

    $obj = $DATABASE->QueryObj($sql);

    echo json_encode(array(
        "status"=>true,
        "data"=>$obj[0]
    ));
