<?php
    include("config/autoload.php");

    $member_id = $REQUEST->member_id;

    $sql = "SELECT * FROM member WHERE member_id='".$member_id."' ";

    $obj = $DATABASE->QueryObj($sql);

    echo json_encode(array(
        "status"=>true,
        "data"=>$obj[0]
    ));
