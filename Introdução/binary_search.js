"use strict";

const binary_search = function (arr, item) {
  let high = arr.length - 1;
  let low = 0;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = arr[mid];

    if (guess === item) {
      return mid;
    } else if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return null;
};

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(binary_search(list, 6)); // 5
