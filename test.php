<?php
    include("config/autoload.php");
    $stmt = $conn->prepare("SELECT * FROM cart");
    $stmt->execute();
    $result = $stmt->get_result();
    $grand_total = 0;
    while($row = $result->fetch_assoc());



    function base64_to_jpeg($base64) {
        $image_parts = explode(";base64,", $base64);
        $image_base64 = base64_decode($image_parts[1]);
        $file = "images/" . uniqid() . '.jpg';
        file_put_contents($file, $image_base64);
    }



                