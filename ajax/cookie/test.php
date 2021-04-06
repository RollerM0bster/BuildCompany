<?php
require "../../admin/init.php";

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
foreach ($request as $key => $value)
    $_POST[$key]=$value;
$res = array('post' => $_POST, 'get' => $_GET, 'req' => $_REQUEST, 'hren' => $postdata, 'cookies'=>$_COOKIE);
echo(json_encode($res, JSON_UNESCAPED_UNICODE));
$_COOKIE['test']=123;
