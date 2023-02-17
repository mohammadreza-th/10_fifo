//بسم الله الرحمن الرحیم

function pull(item, array) {
  let temp = [];
  temp[0] = item;
  const newArray = temp.concat(array);
  return newArray;
}
// console.log("pull(8, [1, 2, 3, 4, 5]) = ", pull(8, [1, 2, 3, 4, 5]));
// --------------------------------------------------

function push(array) {
  pushedArray = [];
  for (i = 0; i < array.length - 1; i++) {
    pushedArray[i] = array[i];
  }
  return pushedArray;
}
// console.log("push([1, 2, 3, 4, 5, 6]) = ", push([1, 2, 3, 4, 5, 6]));
