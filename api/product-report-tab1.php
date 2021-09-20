

<?php
    include("config/autoload.php");
    $sql = "
    SELECT *
    FROM   product
    WHERE p_id<= 5 
    ";
    $obj = $DATABASE->QueryObj($sql);

    echo json_encode(array(
        "status"=>true,
        "datas"=>$obj
    ));
