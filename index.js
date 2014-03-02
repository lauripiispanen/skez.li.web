var express = require('express');

express()
    .use(function(req, res, next) {
        if (req.headers.host && req.headers.host.indexOf("skez.li") == 0) {
            res.writeHead(302, {
                'Location': 'http://www.skez.li'
            });
            res.end();
        } else {
            next();
        }
    })
    .use(express.static(__dirname + '/public'))
    .listen(process.env.PORT || 3000)