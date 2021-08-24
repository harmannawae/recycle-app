<?php
    include("config/autoload.php");

    $username = $REQUEST->username;

    $sql = "SELECT * FROM user WHERE username='".$username."' ";

    $obj = $DATABASE->QueryObj($sql);

    echo json_encode(array(
        "status"=>true,
        "data"=>$obj[0]
    ));
