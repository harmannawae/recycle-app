<?php
    include("config/autoload.php");

    $member_id = $REQUEST->member_id;
    $member_name = $REQUEST->member_name;
    $member_sname = $REQUEST->member_sname;
    $member_phone = $REQUEST->member_phone;
    $username = $REQUEST->username;
    $password = $REQUEST->password;
    $sql = "
        UPDATE member SET
            member_name='".$member_name."',
            member_sname='".$member_sname."',
            member_phone='".$member_phone."',
            username'".$username."',
            password'".$password."'
        WHERE member_id='".$member_id."'
    ";
    $obj = $DATABASE->Query($sql);

    echo json_encode(array(
        "status"=>true,
        "msg"=>"แก้ไขข้อมูลแล้ว"
    ));
