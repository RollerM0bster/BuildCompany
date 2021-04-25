<?php
require "../../admin/init.php";

$res=array();
if(isset($_COOKIE['id']) && isset($_COOKIE['hash'])) {
    $id =pg_escape_string($dbconn, $_COOKIE['id']);
    $hash =pg_escape_string($dbconn, $_COOKIE['hash']);
    $query = "SELECT * FROM user_auth where id ='{$id}' and auth_hash='{$hash}'";
    $result = pg_query($query) or die('Ошибка запроса: ' . pg_last_error());
    if ($line = pg_fetch_array($result, null, PGSQL_ASSOC)) {
        setcookie("id", null, -1, '/');
        setcookie("hash", null, -1, '/');
        $query = "DELETE FROM user_auth where id ='{$id}' and auth_hash='{$hash}'";
        $result = pg_query($query) or die('Ошибка запроса: ' . pg_last_error());
        $res = array('status' => "success");
    }
    else{
        $res=array('status'=>"error",'error'=>'wrong data');
    }
}
else{
    $res=array('status'=>"error",'error'=>'empty data');
}
pg_free_result($result);
pg_close($dbconn);
echo(json_encode($res,JSON_UNESCAPED_UNICODE));