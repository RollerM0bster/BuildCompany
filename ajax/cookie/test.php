<?php
require "../../admin/init.php";

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
foreach ($request as $key => $value)
    $_POST[$key]=$value;
$res = array('post' => $_POST, 'get' => $_GET, 'req' => $_REQUEST, 'hren' => $postdata, 'cookies'=>$_COOKIE);
//echo(json_encode($res, JSON_UNESCAPED_UNICODE));
setcookie("test1", 1, array(' expires'=>time() + 60 * 60 * 24 * 30,'path'=>'/:4200','samesite'=>'None'));
setcookie("test2", 2, array(' expires'=>time() + 60 * 60 * 24 * 30,'path'=>'/','samesite'=>'None'));
setcookie("test3", 3, array(' expires'=>time() + 60 * 60 * 24 * 30,'path'=>'http://localhost:4200/','samesite'=>'None'));
setcookie("test4", 4, array(' expires'=>time() + 60 * 60 * 24 * 30,'path'=>'Http://localhost:4200/login','samesite'=>'None'));
setcookie("test5", 5, array(' expires'=>time() + 60 * 60 * 24 * 30,'path'=>'http://localhost:4200/login','samesite'=>'None'));
$_COOKIE['test']=123;
