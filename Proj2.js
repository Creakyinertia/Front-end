import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Proj2() {
const [Data,setData]=useState([])
const [selectedUser,setSelectedUser]=useState([])
const [Ddata,setDdata]=useState()

const url ="https://jsonplaceholder.typicode.com/users"
useEffect(()=>{
    axios.get(url).then((res)=>{
        setData(res.data)
      })
},[])
const handleSelectUser = (user) => {
    setSelectedUser(user);
  };
// console.log(data)
  return (
    <>
    <div >
        <select onChange={(e) => {const selectedUserId = e.target.value;
        const selected = Data.find((user) => user.id === +selectedUserId);
        console.log(+selectedUserId)
        
    handleSelectUser(selected);}}>
            <option id="name" value='name'>Names</option>
            {
                Data.map((datas)=>{
                    return <option value={datas.id} id={datas.id}>{datas.name}</option>
                })
            }
        </select>
    </div>
    </>
  )
}

export default Proj2