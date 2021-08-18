<?php
    include("config/autoload.php");

    $lat = @$REQUEST->lat;
    $lng = @$REQUEST->lng;


    /// เก็บข้อมูลลงฐาน
    $DATABASE->Query("
        INSERT INTO location (
            lat,
            lng
        ) VALUES (
            '".$lat."',
            '".$lng."'
        )
    ");

    echo json_encode(array(
        "status"=>true,
        "message"=>"สำเร็จ"
    ));
    

    