<?php
    include("config/autoload.php");

    $user_id = @$REQUEST->user_id;
    $sql = "
        SELECT 
            order_history.*,
            product.*,
            order_history.weight*product.p_price AS total 
        FROM order_history 
            INNER JOIN product ON product.p_id=order_history.type
    ";
    $obj = $DATABASE->QueryObj($sql);

    echo json_encode(array(
        "status"=>true,
        "datas"=>$obj
    ));