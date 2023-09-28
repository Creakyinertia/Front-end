// // JavaScript supports different kinds of loops:

// // for - loops through a block of code a number of times
// // for/in - loops through the properties of an object
// // for/of - loops through the values of an iterable object
// // while - loops through a block of code while a specified condition is true
// // do/while - also loops through a block of code while a specified condition is true
// for (let i = 0; i < 5; i++) {
//     text += "The number is " + i + "<br>";
//   }

// //   The JavaScript for in statement loops through the properties of an Object:
// const person = {fname:"John", lname:"Doe", age:25};
// let text = "";
// for (let x in person) {
//   text += person[x];
// }

// // The forEach() method calls a function (a callback function) once for each array element.
// const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// numbers.forEach(myFunction);

// function myFunction(value, index, array) {
//   txt += value;
// }

// // The JavaScript for of statement loops through the values of an iterable object.

// const cars = ["BMW", "Volvo", "Mini"];

// let text = "";
// for (let x of cars) {
//   text += x;
// }

// // The while loop loops through a block of code as long as a specified condition is true.

// while (i < 10) {
//     text += "The number is " + i;
//     i++;
//   }

// //   The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.
// do {
//     text += "The number is " + i;
//     i++;
//   }
//   while (i < 10);