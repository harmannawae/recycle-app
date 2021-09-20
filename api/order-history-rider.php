<?php
    include("config/autoload.php");

    $user_order = @$REQUEST->user_order;
    $sql = "
        SELECT 
            order_history.*,
            product.*,
            user.*,
            order_history.weight*product.p_price AS total 
        FROM order_history 
            INNER JOIN product ON product.p_id=order_history.type
            INNER JOIN user ON user.user_id=order_history.user_id
        WHERE order_history.user_order='".$user_order."'
    ";
    $obj = $DATABASE->QueryObj($sql);

    echo json_encode(array(
        "status"=>true,
        "datas"=>$obj
    ));