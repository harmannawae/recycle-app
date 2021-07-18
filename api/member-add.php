<?php
    include("config/autoload.php");

    $member_id = $DATABASE->QueryMaxId("member", "member_id");
    $member_name = $REQUEST->member_name;
    $member_sname = $REQUEST->member_sname;
    $member_phone = $REQUEST->member_phone;
    $username = $REQUEST->username;
    $password = $REQUEST->password;
    $sql = "
        INSERT INTO member (
            member_id, 
            member_name,
            member_sname,
            member_phone,
            username,
            password
        ) VALUES (
            '".$member_id."', 
            '".$member_name."',
            '".$member_sname."',
            '".$member_phone."',
            '".$username."',
            '".$password."'
        )
    ";
    $obj = $DATABASE->Query($sql);

    echo json_encode(array(
        "status"=>true,
        "msg"=>"เพิ่มข้อมูลแล้ว"
    ));
