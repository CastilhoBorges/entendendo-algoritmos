const soma = function (array) {
  let sum = 0;
  if (array.length === 0) {
    return;
  } else if (array.length === 1) {
    return array[0];
  } else {
    sum = array.reduce((acc, i) => acc + i, 0);
    console.log(sum);
  }
};

//soma([1, 2, 3, 4]);

const itensArray = function (array, i = 0) {
  if (array.length === 0) {
    // Caso-base
    console.log(i);
  } else {
    // Caso recursivo
    i++;
    array.shift();
    itensArray(array, i);
  }
};

itensArray([2, 2, 2, 2, 2, 2]);
