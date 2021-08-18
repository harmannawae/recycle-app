<?php
    include("config/autoload.php");

    $base64 = @$REQUEST->base64;
    $img = @$REQUEST->img;


    function base64_to_jpeg($base64) {
        $image_parts = explode(";base64,", $base64);
        $image_base64 = base64_decode($image_parts[1]);
        $file = "images/" . uniqid() . '.jpg';
        file_put_contents($file, $image_base64, );
    }
    

    echo json_encode(array(
        "status"=>true,
        "message"=>"สำเร็จ"
    ));
    

    



    