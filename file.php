<?php

include 'common.php';

header('Content-Type: application/javascript');

$c = file_get_contents($file);

echo 'window._script__data = (' . json_encode($c) . ')';