// 별 찍기 - 3
// https://www.acmicpc.net/problem/2440

// Read line
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", function(line) {
    star(line)
    rl.close();
}).on("close", function() {
    process.exit();
});


// Problem solving
function star(num) {
    let star = num
    while( star > 0 ) {
        console.log('*'.repeat(star))
        star--
    }
}
