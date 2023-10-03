import React,{useState,useEffect} from 'react'

function Hookmouse() {
    const [X,setX]=useState(0)
    const [Y,setY]=useState(0)
    
    const logmouseposition=e=>{
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }
    
    useEffect(()=>{
        console.log('useEffect called')
        addEventListener('mousemove',logmouseposition)
    },[])


  return (
    <div>Hooks X - {X} Y - {Y}</div>
  )
}

export default Hookmouse