import React from 'react'

function FunctionCLick() {
  
  function clicked(){
    console.log("clicked")
  }  

    return (
    <div>
      <button onClick={clicked}>CLick</button>
    </div>
  )
}

export default FunctionCLick