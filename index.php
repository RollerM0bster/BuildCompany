<?php
require "admin/init.php";
?>
<link rel="stylesheet" type="text/css" href="/style.css">
<body>
<header>
    <div><a class="request_list active" href="#">Заявки</a></div>
    <div><a class="create_request" href="/create">Создать заявку</a></div>
    <div><a class="logout" href="#">Выйти</a></div>
</header>
<div class="container">
    <div class="cards">
        <?php
        $query = "select * from reqs {$where};";
        $result1 = pg_query($query) or die('Ошибка запроса: ' . pg_last_error());
        $res_all = array();
        while ($line = pg_fetch_array($result1, null, PGSQL_ASSOC)) {
            $res = array();
            $res['id'] = $line['id'];
            $res['date'] = $line['req_date'];
            $res['provider'] = array('id' => $line['req_provider']);
            $res['sum'] = $line['pay_sum'];
            $res['state'] = $line['state'];
            $query = "select * from providers where id='" . $res['provider']['id'] . "';";
            $result = pg_query($query) or die('Ошибка запроса: ' . pg_last_error());
            if ($line = pg_fetch_array($result, null, PGSQL_ASSOC)) {
                $res['provider']['name'] = $line['name'];
            }
            if (true || isset($_POST['id'])) {
                $res['materials'] = array();
                $query = "select rm.material as id, rm.count as count_, mt.name as name_, mt.unit as unit from req_mat as rm left join materials as mt on rm.material=mt.id where request_id='" . $res['id'] . "';";
                $result = pg_query($query) or die('Ошибка запроса: ' . pg_last_error());
                while ($line = pg_fetch_array($result, null, PGSQL_ASSOC)) {
                    $res['materials'][] = array('id' => $line['material'], 'count' => $line['count_'], 'name' => $line['name_'], 'unit' => $line['unit']);
                }
            }
            $res_all[] = $res;
        }
        ?>
        <?php foreach ($res_all as $item): ?>
            <div class="card">
                <div class="card_title">Заявка к <?= $item['provider']['name'] ?></div>
                <div class="card_date">Дата: <?= $item['date'] ?></div>
                <div class="card_mats">
                <?php foreach ($item['materials'] as $material):?>
                    <div class="mat_row">
                        <div class="mat_name"><?=$material['name']?></div>
                        <div class="mat_count"><?=$material['count'].' '.$material['unit']?></div>
                    </div>
                    <?php endforeach;?>
                </div>
                <div class="card_sum">Сумма: <?= $item['sum'] ?></div>
                <div class="card_state">
                    <?php if($item['state']=='f'):?>
                        Заявка открыта
                        <div class="close"><a href="#" class="close_req" data-id="<?=$item['id']?>">закрыть</a></div>
                    <?php else:?>
                        Заявка закрыта
                    <?php endif?>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
</div>
</body>

<script src="/js/jquery.js"></script>
<script src="/js/custom.js"></script>