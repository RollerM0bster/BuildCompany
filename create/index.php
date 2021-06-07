<?php
require "../admin/init.php";
// Выполнение SQL-запроса
$query = 'select
       pr.id as id,
       pr.name as name_
       from providers as pr where id!=1';
$result = pg_query($query) or die('Ошибка запроса: ' . pg_last_error());
$provs=array();
while ($line = pg_fetch_array($result, null, PGSQL_ASSOC)) {
    $provs[]=$line;
}
$query = 'select
       mat.id as id,
       mat.name as name_
       from materials as mat';
$result = pg_query($query) or die('Ошибка запроса: ' . pg_last_error());
$mats=array();
while ($line = pg_fetch_array($result, null, PGSQL_ASSOC)) {
    $mats[]=$line;
}

?>
<link rel="stylesheet" type="text/css" href="/style.css">
<body>
<header>
    <div><a class="request_list" href="/">Заявки</a></div>
    <div><a class="create_request active" href="#">Создать заявку</a></div>
    <div><a class="logout" href="#">Выйти</a></div>
</header>
<div class="container">
    <div class="create_container">
        <div class="head">
            Создание заявки
        </div>
        <div class="provider_select">
            <div class="prov_text">
                Поставщик:
            </div>
            <div class="prov_select">
                <select id="prov_new">
                    <?php foreach ($provs as $prov):?>
                        <option value="<?=$prov['id']?>"><?=$prov['name_']?></option>
                    <?php endforeach;?>
                </select>
            </div>
        </div>
        <div class="material_select">
            <div class="materials_title">Материалы для заказа</div>
            <div class="materials"></div>
            <div class="material_new">
                <div class="mat_text">
                    Материал:
                </div>
                <div class="mat_select">
                    <select id="mats_new">
                        <?php foreach ($mats as $prov):?>
                             <option value="<?=$prov['id']?>"><?=$prov['name_']?></option>
                        <?php endforeach;?>
                    </select>
                </div>
            </div>
        </div>
        <div class="end">
            <a href="#" class="create_req">Создать заявку</a>
        </div>
    </div>
</div>
</body>

<script src="/js/jquery.js"></script>
<script src="/js/custom.js"></script>
