<?php
    include("config/autoload.php");

    $user_id = @$REQUEST->user_id;
    $sql = "
        SELECT 
            order_history.*,
            product.*,
            user.*,
            SUM(total) AS sum_total,
            SUM(weight) AS sum_weight,
            order_history.weight*product.p_price AS total 
        FROM order_history 
            INNER JOIN product ON product.p_id=order_history.type
            INNER JOIN user ON user.user_id=order_history.user_id
        WHERE order_history.user_id='".$user_id."'
    ";
    $obj = $DATABASE->QueryObj($sql);

    echo json_encode(array(
        "status"=>true,
        "datas"=>$obj
    ));