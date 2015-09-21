var path = require('path');

var Blynk = require('blynk-library');

var blynk = new Blynk.Blynk('39ecca5ed5c748899d321d1b14b4d3ba', options = {
  certs_path: path.resolve(__dirname, '..', 'node_modules/blynk-library/certs')
});

var lightValue = 0;

function setLight(value) {
  light.write(value);
  lightValue = value;
}

function turnLightOn() {
  setLight(255);
}

function turnLightOff() {
  setLight(0);
}

var terminal = new blynk.VirtualPin(0);
var light = new blynk.VirtualPin(3);

var v1 = new blynk.VirtualPin(1);
v1.on('write', function(param) {
  var value = param[0]
  console.log('V1:', value);
  terminal.write('V1='+value+"\n");
  value == 0 ? turnLightOff() : turnLightOn();
});

var v2 = new blynk.VirtualPin(2);
v2.on('write', function(param) {
  console.log('V2:', param[0]);
  terminal.write('V2='+param[0]+"\n");
  setLight(param[0]);
});

var v4 = new blynk.VirtualPin(4);
v4.on('read', function() {
  v4.write(lightValue);
});

var v9 = new blynk.VirtualPin(9);
v9.on('read', function() {
  v9.write(new Date().getSeconds());
});

blynk.on('connect', function() { console.log("Blynk ready."); });
blynk.on('disconnect', function() { console.log("DISCONNECT"); });

var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello World');
})

app.listen(process.env.PORT || 9000);
