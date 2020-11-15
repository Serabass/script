<?php

include 'common.php';

$line = $_GET['line'];

function appendLine($file, $line) {
  $fp = fopen('data.txt', 'a');
  fwrite($fp, '\nappending data');  
  fclose($fp);  
}

appendLine($file, $line);
