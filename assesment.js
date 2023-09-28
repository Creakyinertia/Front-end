// data=[
//     {subject:'math',value:80},
//     {subject:'science',value:null},
//     {subject:'english',value:null},
//     {subject:'history',value:70},
//     ]

//old
// for(let x in data){
//     if(data[x].value>60){
//         console.log(data[x])
//     }
// }

//new
//let q=data.filter((x)=>{
    // if(x.value>60){
    //     console.log(x)
    // }})

//old
// for(let x in data){
//     if(data[x].value===null){
//         data[x].value=80
//     }
// }

//new
// console.log(data)
//data.forEach((x)=>{
//     if(x.value===null){
//         x.value=80
//     }
// })
// console.log(data)

//duplicates
// const arr = ["node", "react", "javascript", "react", "javascript", "react", "javascript", "node"];
// const res = [...new Set(arr)];
// console.log(res);

//ascending order
// let a=[1,4,3]
// let b=[5,9,6]
// let c=[...a,...b]
// const res = c.sort();
// console.log(res)


//add a num
// let a=[1,2,3,4]
// for(let x in a){
//  a[x]+=2
// }
// console.log(a)
// let a=[1,2,3,4]
// let sum=2;
// let x=a.map((x)=>x+sum)
// console.log(x)



//1d
// let a=[['q','w','e'],['r','t','y']]
// let b=[]
// b=a.flat()
// console.log(b)

//shift last and first
// let a=[1,2,3,4,5]
// let b=a.pop()
// a.unshift(b)
// console.log(a)

