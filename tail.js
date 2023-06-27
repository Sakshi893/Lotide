const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }

};
const tail = function(array) {
  let newArray = array.slice(1);
 return newArray;
};
 assertEqual(tail([5,6,7]), 5);
 assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");