import React from 'react'

function Child(props) {
  return (
    <div>
        {/* <button onClick={props.greetHandler}>Click</button> */}
        <button onClick={()=>props.greetHandler('child')}>Click</button>
    </div>
  )
}

export default Child