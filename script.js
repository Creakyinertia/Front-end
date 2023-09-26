// function myf(){
//     const fruits = ["Banana", "Orange", "Apple", "Mango"];
//     document.getElementById("demo").innerHTML = fruits.join(" * ");
// }


// function my(v11,v12) {
//     let v11 = document.getElementById("v1").value;
//     let v12 = document.getElementById("v2").value;
//     document.getElementById("demo").innerHTML = v11+v12;
//   }

// const person = {
//     name: 'Sam',
//     age: 30,
//     // using function as a value
//     greet: function() { console.log('hello') }
// }

// person.greet();

// document.getElementById("demo").innerHTML = person;

// class Rectangle {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }
//   }
  
//   // Expression; the class is anonymous but assigned to a variable
//   const Rectangle = class {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }
//   };
  
//   // Expression; the class has its own name
//   const Rectangle = class Rectangle2 {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }
//   };


//   //inheritance
//   class Animal {
//     constructor(name) {
//       this.name = name;
//     }
  
//     speak() {
//       console.log(`${this.name} makes a noise.`);
//     }
//   }
  
//   class Dog extends Animal {
//     constructor(name) {
//       super(name); // call the super class constructor and pass in the name parameter
//     }
  
//     speak() {
//       console.log(`${this.name} barks.`);
//     }
//   }
  
//   const d = new Dog("Mitzie");
//   d.speak();

// //promises
// let myPromise = new Promise(function(myResolve, myReject) {
//     // "Producing Code" (May take some time)
    
//       myResolve(); // when successful
//       myReject();  // when error
//     });
    
//     // "Consuming Code" (Must wait for a fulfilled Promise)
//     myPromise.then(
//       function(value) { /* code if successful */ },
//       function(error) { /* code if some error */ }
//     );

//     //promises
//     let myPromise = new Promise(function(myResolve, myReject) {
//         // "Producing Code" (May take some time)
        
//           myResolve(); // when successful
//           myReject();  // when error
//         });
        
//         // "Consuming Code" (Must wait for a fulfilled Promise)
//         myPromise.then(
//           function(value) { /* code if successful */ },
//           function(error) { /* code if some error */ }
//         );
