<?php
    include("config/autoload.php");

    $username = $REQUEST->username;
    $password = $REQUEST->password;

    $sql = "SELECT * FROM member WHERE username='".$username."' AND password='".$password."' ";
    $obj = $DATABASE->QueryObj($sql);
    if( sizeof($obj)==1 ) {
        echo json_encode(array(
            "status"=>true,
            "data"=>$obj[0]
        ));
    } else {
        echo json_encode(array(
            "status"=>false
        ));
    }
