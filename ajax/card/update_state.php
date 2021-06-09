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

$query = "select * from material_cards where id={$id};";
$result1 = pg_query($query) or die('Ошибка запроса: ' . pg_last_error());
$res_all=array();
if ($line = pg_fetch_array($result1, null, PGSQL_ASSOC)) {
    if($state==9 or $state==5){
        if($state==5){
            $query = "update stocks set quantity = quantity + ".$line['count']." where storage=1 and material=".$line['material_id'].";";
            $result = pg_query($query) or die('Ошибка запроса: ' . pg_last_error());
        }
        else{
            $query = "update stocks set quantity = quantity - ".$line['count']." where storage=1 and material=".$line['material_id'].";";
            $result = pg_query($query) or die('Ошибка запроса: ' . pg_last_error());
        }
    }
}


// Очистка результата
pg_free_result($result);

// Закрытие соединения
pg_close($dbconn);

echo(json_encode(array('res'=>$result),JSON_UNESCAPED_UNICODE));
?>
