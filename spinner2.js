const runTime = 50;

let spinner = ['\r|   ','\r/   ','\r-   ','\r-   ','\r\\   '];

const makeSpin = function (sequence) {

for (let x=0; x < sequence.length; x++) {
  setTimeout(() => {
    process.stdout.write(sequence[x])
  }, 150 * x);
}  


}

makeSpin(spinner);