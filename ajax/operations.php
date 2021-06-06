<?php
require "../admin/init.php";

// Выполнение SQL-запроса
$query = 'select
       op.id as id,
       op.name as name
       from operations as op';
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