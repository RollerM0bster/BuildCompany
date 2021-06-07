<?php
require "../admin/init.php";

// Выполнение SQL-запроса
$query = 'select
       st.id as id,
       st.name as name,
       st.provider_check as is_input
       from states as st where st.enable=true';
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