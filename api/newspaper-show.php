<?php
    include("config/autoload.php");

    $n_id = $REQUEST->n_id;

    $sql = "SELECT * FROM newspaper WHERE n_id='".$n_id."' ";

    $obj = $DATABASE->QueryObj($sql);

    echo json_encode(array(
        "status"=>true,
        "data"=>$obj[0]
    ));
