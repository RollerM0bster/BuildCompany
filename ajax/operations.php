<?php
require "../admin/init.php";

// Выполнение SQL-запроса
$query = 'select
       op.id as id,
       op.name as name,
       op.operand as oper
       from operations as op';
$result = pg_query($query) or die('Ошибка запроса: ' . pg_last_error());
$res=array();
while ($line = pg_fetch_array($result, null, PGSQL_ASSOC)) {
    $line['avail_states']=array();
    $query = "select * from states where provider_check='".$line['oper']."' and enable='t' order by id ASC;";
    $result1 = pg_query($query) or die('Ошибка запроса: ' . pg_last_error());
    while ($line1 = pg_fetch_array($result1, null, PGSQL_ASSOC)) {
        $line['avail_states'][]=array('name'=>$line1['name'],'id'=>$line1['id']);
    }
    $res[]=$line;
}

// Очистка результата
pg_free_result($result);

// Закрытие соединения
pg_close($dbconn);

echo(json_encode($res,JSON_UNESCAPED_UNICODE));