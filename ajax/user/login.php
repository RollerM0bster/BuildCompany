<?php
require "../../admin/init.php";

function generateCode($length = 6)
{
    $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHI JKLMNOPRQSTUVWXYZ0123456789";
    $code = "";
    $clen = strlen($chars) - 1;
    while (strlen($code) < $length) {
        $code .= $chars[mt_rand(0, $clen)];
    }
    return $code;
}
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
foreach ($request as $key => $value)
    $_POST[$key]=$value;
// Выполнение SQL-запроса
$login = trim($_POST['login']);
$pass = trim($_POST['password']);
$query = "SELECT * FROM users where login='".pg_escape_string($dbconn,$login)."'";
$result = pg_query($query) or die('Ошибка запроса: ' . pg_last_error());
$res=array();
if ($line = pg_fetch_array($result, null, PGSQL_ASSOC)) {
    if (md5(md5($pass))==$line['password']) {
        $res = array('status' => "success", 'id' => $line['id']);
        $hash = md5(generateCode(10));
        # Записываем в БД новый хеш авторизации
        $id=$line["id"];

        $query = "INSERT INTO user_auth(auth_hash,id) VALUES ('{$hash}','{$id}')";
        $result = pg_query($query) or die('Ошибка запроса: ' . pg_last_error());
        # Ставим куки
        setcookie("id", $id, time() + 60 * 60 * 24 * 30, '/');
        setcookie("hash", $hash, time() + 60 * 60 * 24 * 30, '/');
    }
    else{
        $res=array('status'=>"fail pass",'id'=>0);
    }
}
else{
    $res=array('status'=>"fail login",'id'=>0);
}

// Очистка результата
pg_free_result($result);

// Закрытие соединения
pg_close($dbconn);

echo(json_encode($res,JSON_UNESCAPED_UNICODE));
?>
