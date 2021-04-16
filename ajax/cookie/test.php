<?php
require "../../admin/init.php";

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
foreach ($request as $key => $value)
    $_POST[$key]=$value;
$res = array('post' => $postdata, 'get' => $request, 'req' => $_POST, 'hren' => $postdata, 'cookies'=>$_COOKIE);
echo(json_encode($res, JSON_UNESCAPED_UNICODE));
setcookie("test1", 1, time() + 60 * 60 * 24 * 30);
$_COOKIE['test']=123;
