<?php
require "../admin/init.php";

// Выполнение SQL-запроса
$query = 'select
       mat.id as id,
       mat.name as name,
       mat.unit as measure,
       mat.price as unitPrice,
       stocks.quantity as quantity
       from materials as mat join stocks on mat.id=stocks.material order by id asc';
$result = pg_query($query) or die('Ошибка запроса: ' . pg_last_error());
$res=array();
while ($line = pg_fetch_array($result, null, PGSQL_ASSOC)) {
    $res[]=$line;
}

// Очистка результата
pg_free_result($result);

// Закрытие соединения
pg_close($dbconn);

echo(json_encode($res,JSON_UNESCAPED_UNICODE));