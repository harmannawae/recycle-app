<?php
    include("config/autoload.php");

    $sql = "SELECT * FROM product";

    $obj = $DATABASE->QueryObj($sql);

    echo json_encode(array(
        "status"=>true,
        "datas"=>$obj
    ));


    