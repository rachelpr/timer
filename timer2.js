const readline = require('readline');
const { stdin: input, stdout: output, stdin } = require('process');
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const rl = readline.createInterface({ input, output });

//A function that is an alarm clock / timer which will beep after a specified amount of time 
const timer = function () {
  process.stdin.on('data', (key) => {
    if (key === "b") {
      process.stdout.write("\x07");
    }
    if (key === '\u0003') {
      console.log(`\nThanks for using me, adios!`)
      process.exit();
    }
  });
  rl.question("Input a number from 1-9: ",
    (seconds) => {
      console.log(`Setting timer for ${seconds} seconds`);
      for (let i = 0; i < seconds.length; i++) {
        setTimeout(() => {
          process.stdout.write("\x07")
        }, seconds * 1000)
      }
      rl.close();
    })
};
timer()


          // if (typeof seconds === "number") {
          // } else {
          //   console.log("That's not a number, enter a number!")
          //}