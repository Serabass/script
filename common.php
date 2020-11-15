<?php

$file = 'file.txt';

function stripFirstLine($text) {        
  return substr($text, strpos($text, "\n") + 1);
}

function appendLine($file, $line) {
  $fp = fopen($file, 'a');
  fwrite($fp, "\n" . $line);  
  fclose($fp);  
}
