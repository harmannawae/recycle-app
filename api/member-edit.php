<?php
    include("config/autoload.php");

    $user_id = $REQUEST->user_id;
    $user_name = $REQUEST->user_name;
    $user_lastname = $REQUEST->user_lastname;
    $user_phone = $REQUEST->user_phone;
    $user_address = $REQUEST->user_address;
    $username = $REQUEST->username;
    $password = $REQUEST->password;
    $user_type = $REQUEST->user_type;
    $sql = "
        UPDATE user SET
            user_name='".$user_name."',
            user_lastname='".$user_lastname."',
            user_phone='".$user_phone."',
            user_address='".$user_address."',
            username='".$username."',
            password='".$password."',
            user_type='".$user_type."'
        WHERE user_id='".$user_id."'
    ";
    $obj = $DATABASE->Query($sql);

    echo json_encode(array(
        "status"=>true,
        "msg"=>"แก้ไขข้อมูลแล้ว"
    ));