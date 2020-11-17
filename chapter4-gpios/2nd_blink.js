
var onoff = require('onoff');
var Gpio = onoff.Gpio,
  led = new Gpio(4, 'out'),
  interval,
  led2 = new Gpio(17, 'out'),
  interval2;


interval = setInterval(function () {
  var value = (led.readSync() + 1) % 2;
  led.write(value, function() {
    console.log("Passangers can pass. Cars should stop!");
  });
}, 2000);

interval2 = setInterval(function () {
    var value = (led2.readSync() + 1) % 2;
    led2.write(value, function() {
      console.log("Passangers should stop! Cars can pass.");
    });
  }, 4000);


  process.on('SIGINT', function () {
        clearInterval(interval);
        led.writeSync(0);
        led.unexport();
        console.log('Bye, bye!');
        process.exit();
});