<?php
    include("config/autoload.php");

    $user_id = @$REQUEST->user_id;
    $sql = "
        SELECT 
            member_sell.*,
            product.*,
            member_sell.weight*product.p_price AS total 
        FROM member_sell 
            INNER JOIN product ON product.p_id=member_sell.type
    ";
    $obj = $DATABASE->QueryObj($sql);

    echo json_encode(array(
        "status"=>true,
        "datas"=>$obj
    ));