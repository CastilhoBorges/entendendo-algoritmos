const saudar2 = function (nome) {
  console.log(`Como vai ${nome}?`);
};

const tchau = function () {
  console.log(`ok, tchauu!!`);
};

const saudar = function (nome) {
  console.log(`Olá, mundo! eu sou o ${nome}`);
  saudar2(nome);
  console.log(`tchauu!!`);
  tchau();
};
saudar("Pedro");

