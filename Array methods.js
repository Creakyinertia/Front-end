// toString();
// let n=['Danny','Angel','Sarah','Winston'];
// let s=n.toString();
// console.log(s);

// join();
// let n=['Danny','Angel','Sarah','Winston'];
// let s=n.join('-');
// console.log(s);

// concat();
// let n=['Danny','Angel','Sarah','Winston'];
// let m=['spain','brazil','portugal'];
// let s=n.concat(m);
// console.log(s);

// splice();
// let n=['Danny','Angel','Sarah','Winston'];
// n.splice(1,1,'bob');
// console.log(n);

// slice()
// let m=['Danny','Angel','Sarah','Winston'];
// let s=m.slice(1,3);
// console.log(s);

// indexOf()
// let m=['Danny','Angel','Sarah','Winston'];
// let ind=m.indexOf('Sarah');
// console.log(ind);

// lastIndexOf()
// let m=['Danny','Angel','Sarah','Winston','Sarah'];
// let ind=m.lastIndexOf('Sarah');
// console.log(ind);

// flat()
// let nums=[1,2,3,4,[5,6],7];
// let s=nums.flat();
// console.log(s);

// let nums=[1,2,3,4,[5,6,[7,8]],9];
// let s=nums.flat(2);
// console.log(s);

// some()
// let nums=[1,2,3,4,5,6];
// let s=nums.some((n)=>n>5);
// console.log(s);

// every()
// let nums=[1,2,3,4,5,6];
// let s=nums.every((n)=>n>0);
// console.log(s);

// forEach()
// let m=['Danny','Angel','Sarah','Winston','Sarah'];
// m.forEach(n => {
//     console.log(n);
// });

// map()
// let nums=[1,2,3,4,5,6];
// let doubled=nums.map((n)=>n*2);
// console.log(doubled);

// Reduce()
// let nums=[1,2,3,4,5,6];
// let doubled=nums.reduce((total,currentValue)=>total+currentValue);
// console.log(doubled);

// filter()
// let posts=[
//     {title:'post1',author:'dan'},
//     {title:'post2',author:'dan'},
//     {title:'post3',author:'sarah'}
// ]
// let danspost=posts.filter((p)=>p.author==='dan')
// console.log(danspost);

// findIndex()
// let posts=[
//     {item:'ketchup',quantity:32},
//     {item:'mayo',quantity:9},
//     {item:'hotsauce',quantity:12}
// ]
// let indexitem=posts.findIndex((p)=>p.item==='mayo')
// console.log(indexitem);

// find()
// let posts=[
//     {item:'ketchup',quantity:32},
//     {item:'mayo',quantity:9},
//     {item:'hotsauce',quantity:12}
// ]
// let items=posts.find((p)=>p.item==='mayo')
// console.log(items);

// sort()
// let nums=[4,5,3,1,2,6];
// let sorted=nums.sort();
// console.log(sorted);

// let nums=[4,5,3,111,212,61];
// let sorted=nums.sort((a,b)=>a-b);
// console.log(sorted);

// objects
// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     fullName : function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };
//   console.log(person);

// adding properties to object
// const tekken = {
//     player: 'Hwoarang',
//     fightingStyle: 'Tae Kwon Doe',
//     human: true
//   };
//   tekken.origin='South Korea';
//   delete tekken.human;
//   console.log(tekken);
//   let s=Object.keys(tekken);
//   let r=Object.values(tekken);
//   console.log(s);
//   console.log(r);

// function reverseString(str) {
//     const s=str.split('');
//     let r="";
//     for(let x=s.length-1;x>=0;x--){
//       r=r+s[x];    
//     }
    
//     return r;
//   }
//   reverseString("hello");
// function findLongestWordLength(str) {
//     const a=str.split('');
//     let max=0;
//     let c=0;
//     for(let i=0;i<a.length;i=i+c){
//       let x=0;
//       for(let j=0;j<a.length;j++){
//         x++;
//         if(x>max){
//           max=x;
//         }
//         if(a[j]===' '){
//           break;
//         }
//       }
//       c=x+1;
//     }
//     return max;
//   }
  
//   findLongestWordLength("The quick brown fox jumped over the lazy dog");