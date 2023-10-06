import React from 'react'
import { Link } from 'react-router-dom'
export const Home = () => {
  return (
    <>
    <div>Assessment-2</div>
    <button><Link to='/Hookcounter' style={{textDecoration:'none'}}>Counter</Link></button>
    <button><Link to='/Timer' style={{textDecoration:'none'}}>Timer</Link></button>
    </>
    
  )
}
