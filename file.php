<?php

include 'common.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT");
header("Access-Control-Max-Age: 0");
header("Content-Security-Policy: default-src *; connect-src *; script-src *; object-src *;");
header("X-Content-Security-Policy: default-src *; connect-src *; script-src *; object-src *;");
header("X-Webkit-CSP: default-src *; connect-src *; script-src 'unsafe-inline' 'unsafe-eval' *; object-src *;");

readfile($file);

Refused to connect to 'http://pp.serabass.net/avito/file.php' because it violates the following Content Security Policy directive: "connect-src 'self' *.avito.ru *.k.avito.ru mc.yandex.ru https://fcm.googleapis.com dev.visualwebsiteoptimizer.com www.google.com www.google.ru pubs2-eu.creativecdn.com an.yandex.ru securepubads.g.doubleclick.net stats.g.doubleclick.net connect.facebook.net www.facebook.com rtax.criteo.com ads.adfox.ru socket.avito.ru www.google-analytics.com csi.gstatic.com sntr.avito.ru wss://*.avito.ru www.avito.st static.avito.ru".