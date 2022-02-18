//A function that is an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments
const timer = function (seconds) {
  seconds = process.argv.slice(2)
  console.log(seconds)
  for (let i = 0; i < seconds.length; i++) {
    setTimeout(() => {
      console.log(seconds[i])
      process.stdout.write("\x07")

    }, seconds[i] * 1000)
  }
};
timer()