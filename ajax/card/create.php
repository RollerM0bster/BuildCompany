<?php
require "../admin/init.php";

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
foreach ($request as $key => $value)
    $_POST[$key]=$value;

// Выполнение SQL-запроса
$mat=$_POST['material_id'];
$state=$_POST['state_id'];
$oper=$_POST['operation_id'];
$count=$_POST['count'];
$provider=$_POST['provider'];

$query = "insert into material_cards (material_id, state_id, operation_id, provider, count) values ({$mat},{$state},{$oper},{$provider},{$count}) returning id;";
$result = pg_query($query) or die('Ошибка запроса: ' . pg_last_error());
$res=array();
if ($line = pg_fetch_array($result, null, PGSQL_ASSOC)) {
    $res['id']=$line;
}

// Очистка результата
pg_free_result($result);

// Закрытие соединения
pg_close($dbconn);

echo(json_encode($res),JSON_UNESCAPED_UNICODE);
?>
