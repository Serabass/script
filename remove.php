<?php

include 'common.php';

function stripFirstLine($text) {        
  return substr($text, strpos($text, "\n") + 1);
}
