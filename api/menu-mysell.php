<?php
include("config/autoload.php");

$member_id = $REQUEST->member_id;
$username = $REQUEST->username;



$sql = "SELECT * FROM member
INNER JOIN menu_sell ON member.member_id=menu_sell.member_id WHERE member.member_id='" . $member__id . "', menu_sell.member_id='" . $member_id . "' ";

$obj = $DATABASE->QueryObj($sql);

echo json_encode(array(
    "status" => true,
    "data" => $obj[0]
));
