import React,{useState} from 'react'

function HookCounter2() {
  const initialcount=0
  const [count,setCount]=useState(initialcount)
    const Increment5=()=>{
        for(let i=1;i<=5;i++){
            setCount((prevCount)=>prevCount+1)
        }
    }

    return (
    <div>Counter {count}
    <br/>
        <button onClick={()=>setCount((prevCount)=>prevCount+1)}>Decrement</button>
        <button onClick={()=>setCount(initialcount)}>Reset</button>
        <button onClick={()=>setCount((prevCount)=>prevCount+1)}>increment</button>
        <button onClick={Increment5}>increment by 5</button>
    </div>
  )
}

export default HookCounter2