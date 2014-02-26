var express = require('express');

express()
    .use(express.static(__dirname + '/public'))
    .listen(process.env.PORT || 3000)