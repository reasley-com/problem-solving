// 접미사 배열
// https://www.acmicpc.net/problem/11656

// Read line
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", function(line) {
  sort(line)
  rl.close();
}).on("close", function() {
  process.exit();
});


// Problem solving
function sort(string) {
    let stringList = []
    for (let i=0; i<string.length; i++) stringList.push(string.substr(i))
    stringList.sort().forEach(str => console.log(str))
}
