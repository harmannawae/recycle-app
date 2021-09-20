<?php
    include("config/autoload.php");
    $sql = "
            SELECT COUNT(user_id) AS report_count
            FROM member_sell;
    ";
    $obj = $DATABASE->QueryObj($sql);

    echo json_encode(array(
        
        "status"=>true,
        "datas"=>$obj
    ));
