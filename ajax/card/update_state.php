<?php
require "../../admin/init.php";
// Соединение, выбор базы данных

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
foreach ($request as $key => $value)
    $_POST[$key]=$value;

//$dbconn = pg_connect("host=localhost dbname=business user=letius password=password");

$state=$_POST['state_id'];
$id=$_POST['card_id'];

$query = "update material_cards set  state_id={$state} where id={$id};";
$result = pg_query($query) or die('Ошибка запроса: ' . pg_last_error());

// Очистка результата
pg_free_result($result);

// Закрытие соединения
pg_close($dbconn);
?>
