<?php

include 'common.php';

header('Content-Type: application/javascript');

$c = file_get_contents($file);

echo 'fn(' . json_encode($c) . ')';