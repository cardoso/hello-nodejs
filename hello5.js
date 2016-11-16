const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var paises = [];
let nome_arquivo = "";

function main() {
  rl.question("Digite o nome do arquivo:\n", function(input) {
    nome_arquivo = input;
    fs.appendFile(nome_arquivo, "");
    leiapais(3);
  });
}

function leiapais(count) {
  if(count--) {
    rl.question("Digite um nome de país:\n", function(line) {
      paises.push(line);
      leiapais(count);
    });
  } else gravaarquivo();
}

function gravaarquivo() {
  for(const i in paises)
    fs.appendFile(nome_arquivo, paises[i] + "\n");

  rl.close();
}

main();
