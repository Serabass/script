<?php

$file = 'file.txt';

function stripFirstLine($text) {        
  return substr($text, strpos($text, "\n") + 1);
}

function appendLine($file, $line) {
  $fp = fopen('data.txt', 'a');
  fwrite($fp, '\nappending data');  
  fclose($fp);  
}
