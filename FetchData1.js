import React from 'react'

function FetchData1() {

    const url ="https://jsonplaceholder.typicode.com/users"
    // let x = 5
    // let y = 6;
    // let prom = new Promise((resolve,reject)=>{
    //     if(x===y){
    //         resolve("matched")
    //     }else{
    //         reject("didnt match")
    //     }
    // })

    // prom.then((msg)=>{
    //     console.log(msg)
    // }).catch((msg)=>{
    //     console.log(msg)
    // })

    fetch(url).then((res)=>{
            return res.json()    
    }).then((data)=>{
        data.map((names)=>{
            console.log(names.name)
        })
    })
    .catch((err)=>{
        console.log(err)
    })
  return (
    <div>FetchData1</div>
  )
}

export default FetchData1