<?php
    include("config/autoload.php");

    $p_id = $REQUEST->p_id;

    $sql = "SELECT * FROM product WHERE p_id='".$p_id."' ";

    $obj = $DATABASE->QueryObj($sql);

    echo json_encode(array(
        "status"=>true,
        "data"=>$obj[0]
    ));
