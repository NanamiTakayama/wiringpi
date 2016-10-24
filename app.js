var wpi = require('wiring-pi');
wpi.setup('wpi');

var pin = 7;
wpi.pinMode(pin, wpi.OUTPUT);

var LED = 1;

 wpi.digitalWrite(pin, LED);
//  setInterval(function() {
// 	 //console.log(LED);
// 	 LED = (LED)? 0 : 1;
// }, 1000);
