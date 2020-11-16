<?php

include 'common.php';

header('Content-Type: application/javascript');
header('Cache-Control: max-age=0, no-cache, no-store, must-revalidate');
header('Pragma: no-cache');
header('Expires: 0');

$c = file_get_contents($file);

echo json_encode($c);