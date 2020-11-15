<?php

include 'common.php';

$contents = file_get_contents($file);

$stripped = stripFirstLine($contents);

file_put_contents($file, $stripped);