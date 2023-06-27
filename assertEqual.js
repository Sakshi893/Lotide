
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }

};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);



//no output on console because function itself is doing nothing
//if we had to print it to console
//console.assert(assertEqual("Lighthouse Labs", "Bootcamp"));
//console.assert(assertEqual(1, 1));

//let x = 5;
//let y = 5;
//const myArr = ["Orange", "Banana", "Mango", "Kiwi"];
//console.assert(x + y == 11, myArr);