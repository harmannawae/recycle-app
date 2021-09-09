<?php
    include("config/autoload.php");

    $user_id = $DATABASE->QueryMaxId("user", "user_id");
    $user_order = $DATABASE->QueryMaxId("user", "user_order");
    $user_name = $REQUEST->user_name;
    $user_lastname = $REQUEST->user_lastname;
    $user_phone = $REQUEST->user_phone;
    $user_address = $REQUEST->user_address;
    $username = $REQUEST->username;
    $password = $REQUEST->password;

     //เรียกฟั่งชั่นดักจับคนไม่กรอกข้อมูล ที่เรากำหนดฟั่งชั่นหน้า autoload 
    CheckValue($user_name, "คุณยังไม่ได้ป้อนชื่อ");
    CheckValue($user_lastname, "คุณยังไม่ได้ป้อนนามสกุล");
    CheckValue($user_phone, "คุณยังไม่ได้ป้อนเบอร์โทรศัพท์");
    CheckValue($user_address, "คุณยังไม่ได้ป้อนที่อยู่");
    CheckValue($username, "คุณยังไม่ได้ป้อนีusername");
    CheckValue($password, "คุณยังไม่ได้ป้อนpassword");

    $sql = "
        INSERT INTO user (
            user_id,
            user_order,
            user_name,
            user_lastname,
            user_phone,
            user_address,
            username,
            password,
            user_type
        ) VALUES (
            '".$user_id."', 
            '".$user_order."', 
            '".$user_name."',
            '".$user_lastname."',
            '".$user_phone."',
            '".$user_address."',
            '".$username."',
            '".$password."',
            'member'
        )
    ";
    $obj = $DATABASE->Query($sql);

    echo json_encode(array(
        "status"=>true,
        "msg"=>"สมัคสมาชิกสำเร็จ"
    ));
