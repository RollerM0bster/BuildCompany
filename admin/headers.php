<?php
header('Accept: application/json, text/plain, */*');
header('Access-Encoding: gzip, deflate');
header('Access-Control-Allow-Origin: http://localhost:4200');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Credentials');
header('Access-Control-Allow-Credentials: true');

