<?php
    include("config/autoload.php");

    $id = $REQUEST->id;

    $sql = "SELECT 
    member_sell.*,
    product.*,
    member_sell.weight*product.p_price AS total
     FROM member_sell
     INNER JOIN product
     ON member_sell.type = product.p_id WHERE id='".$id."' ";

    $obj = $DATABASE->QueryObj($sql);

    echo json_encode(array(
        "status"=>true,
        "data"=>$obj[0]
    ));