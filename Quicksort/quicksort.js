"use strict";

const quickSort = function (array) {
  if (array.length < 2) {
    return array;
  } else {
    let pivo = array[0];
    let menores = [];
    let maiores = [];
    for (let i = 1; i <= array.length; i++) {
      if (array[i] <= pivo) {
        menores.push(array[i]);
      } else {
        maiores.push(array[i]);
      }
    }
    menores = quickSort(menores);
    maiores = quickSort(maiores);

    return [...menores, pivo, ...maiores]
  }
};

console.log(quickSort([33, 15, 10]));
