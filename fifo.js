//بسم الله الرحمن الرحیم

// 1) push function with for loop!

function push(item, array) {
  const pushedArray = [];
  pushedArray[0] = item;
  for (i = 0; i < array.length; i++) {
    pushedArray[i + 1] = array[i];
  }
  return pushedArray;
}

//2) push function with concat() method!

// function push(item, array) {
//   const temp = [];
//   temp[0] = item;
//   const pushedArray = temp.concat(array);
//   return pushedArray;
// }

//test it your self:
// console.log("push(8, [1, 2, 3, 4, 5]) = ", push(8, [1, 2, 3, 4, 5]));

//3) pull function with for loop!
function pull(array) {
  console.log("removed element;", array[array.length - 1]);
  const pulledArray = [];
  for (i = 0; i < array.length - 1; i++) {
    pulledArray[i] = array[i];
  }
  return pulledArray;
}

//test it your self:
// console.log("pull([1, 2, 3, 4, 5, 6]) = ", pull([1, 2, 3, 4, 5, 6]));

//4) extra workout (setIn() method)!
//this method sets "item" in index "i" positioned element of "array"! and push elements with index i and higher to next index.
function setIn(item, i, array) {
  if (Number.isInteger(i) && i >= 0) {
    const newArray = [];
    if (i <= array.length) {
      for (j = 0; j <= array.length; j++) {
        if (j < i) {
          newArray[j] = array[j];
        } else if (j === i) {
          newArray[j] = item;
        } else {
          newArray[j] = array[j - 1];
        }
      }
    } else {
      for (j = 0; j < array.length; j++) {
        newArray[j] = array[j];
      }
      newArray[i] = item;
    }
    return newArray;
  } else {
    console.log(
      "your index number (",
      i,
      ") isn't available in your array (",
      array,
      ")!"
    );
  }
}

//test it your self:
// console.log(setIn("hamid", 3, [1, 2, 3]));
// console.log(setIn("hamid", 0, [1, 2, 3]));
// console.log(setIn("hamid", 8, [1, 2, 3]));
