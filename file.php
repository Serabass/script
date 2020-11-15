<?php

include 'common.php';

$c = file_get_contents($file);

echo 'fn(' . json_encode($c) . ')';