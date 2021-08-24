<?php
    include("config/autoload.php");

    $username = $REQUEST->username;
    $password = $REQUEST->password;

    $sql = "SELECT * FROM user WHERE username='".$username."' AND password='".$password."' ";
    $obj = $DATABASE->QueryObj($sql);
    if( sizeof($obj)==1 ) {
        echo json_encode(array(
            "status"=>true,
            "data"=>$obj[0],
            "message"=>"เข้าสู่ระบบสำเร็จกกก"
        ));
    } else {
        echo json_encode(array(
            "status"=>false,
            "message"=>"ไม่สำเร็จกรุณาลองใหม่อีกครั้ง"
        ));
    }
