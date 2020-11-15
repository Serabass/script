<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT");
header("Access-Control-Max-Age: 0");
header("Content-Security-Policy: default-src *; connect-src *; script-src *; object-src *;");
header("X-Content-Security-Policy: default-src *; connect-src *; script-src *; object-src *;");
header("X-Webkit-CSP: default-src *; connect-src *; script-src 'unsafe-inline' 'unsafe-eval' *; object-src *;");

$file = 'file.txt';

function stripFirstLine($text) {        
  return substr($text, strpos($text, "\n") + 1);
}

function appendLine($file, $line) {
  $fp = fopen($file, 'a');
  fwrite($fp, "\n" . $line);  
  fclose($fp);  
}
