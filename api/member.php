<?php
    include("config/autoload.php");

    $sql = "SELECT * FROM member";

    $obj = $DATABASE->QueryObj($sql);

    echo json_encode(array(
        "status"=>true,
        "datas"=>$obj
    ));
