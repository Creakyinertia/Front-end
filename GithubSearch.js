import React, { useState } from 'react'
const Home=()=>{
    const [data,setData]=useState('')
  return (
    <>
    <select>
        <option ></option>
    </select>
    <input type='text' placeholder='Search' onChange={e=>setData(e.target.value)}/>
    <a href={`https://github.com/${data}`}><button>Search</button></a>
    </>
  )
}
