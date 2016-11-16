const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var nomes = [];

function leianome(count) {
  if(count--) {
    rl.question("Digite um nome:\n", function(line) {
      nomes.push(line);
      leianome(count);
    });
  } else gravaarquivo();
}

function gravaarquivo() {
  for(const i in nomes)
    fs.appendFile("nomes.txt", nomes[i] + "\n");

  rl.close();
}

leianome("3");
