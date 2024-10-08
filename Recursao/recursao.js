const regressiva = function (i) {
  console.log(i);
  if (i <= 1) {
    // Caso-base
    return;
  } else {
    // Caso Recursivo
    regressiva(i - 1);
  }
};
