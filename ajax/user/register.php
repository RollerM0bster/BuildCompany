<?php
require "../admin/init.php";


if (isset($_POST['submit'])) {
    $err = array();
    # проверям логин
    if (!preg_match("/^[a-zA-Z0-9]+$/", $_POST['login'])) {
        $err[] = "Логин может состоять только из букв английского алфавита и цифр";
    }
    if (strlen($_POST['login']) < 3 or strlen($_POST['login']) > 30) {
        $err[] = "Логин должен быть не меньше 3-х символов и не больше 30";
    }
    # проверяем, не сущестует ли пользователя с таким именем

    $query = "SELECT COUNT(user_id) FROM users WHERE user_login='" . mysqli_real_escape_string($connection, $_POST['login']) . "'";
    $result = pg_query($query) or die('Ошибка запроса: ' . pg_last_error());
    if ($result['COUNT(user_id)'] > 0) {
        $err[] = "Пользователь с таким логином уже существует в базе данных";
    }


    # Если нет ошибок, то добавляем в БД нового пользователя

    if (count($err) == 0) {
        $login = $_POST['login'];
        # Убераем лишние пробелы и делаем двойное шифрование
        $password = md5(md5(trim($_POST['password'])));
        $query = "insert into users (login,password) values ('{$login}','{$password}')";
        $result = pg_query($query) or die('Ошибка запроса: ' . pg_last_error());
        $res=array('status'=>"success");
    } else {
        $res=array('status'=>"fail",'errors'=>$err);
    }

}

// Очистка результата
pg_free_result($result);

// Закрытие соединения
pg_close($dbconn);

echo(json_encode($res));
?>
