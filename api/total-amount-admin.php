<?php
    include("config/autoload.php");

    $user_id = @$REQUEST->user_id;
    $sql = "
        SELECT 
            SUM(total) AS sum_total,
            SUM(weight) AS sum_weight
        FROM order_history;
    ";
    $obj = $DATABASE->QueryObj($sql);

    echo json_encode(array(
        "status"=>true,
        "datas"=>$obj
    ));


