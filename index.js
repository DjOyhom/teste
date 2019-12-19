var express = require('express');
var app = express();

app.get('/:id', function (req, res) {
    var dis;

    if (req.params.id > 0) {
        var d = new Date();
        dis = d.getMinutes().toString();
    }else {
        dis = "0";
    }
    res.send(dis);
    console.log(dis + "-----------" + req.params.id);
});


app.get('/', function (req, res) {
    var dis;

    if (req.params.id > 0) {
        var d = new Date();
        dis = d.getMinutes().toString();
    }else {
        dis = "0";
    }
    res.send(dis);
});

app.listen(3004, function () {
  console.log('Api-GDD on port 3004!');
});
