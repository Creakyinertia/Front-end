import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCakes } from '../REDUX'

const HookCakeContainer=()=>{
    const numOfCakes=useSelector(state=>state.Cake.numOfCakes)
    const dispatch=useDispatch()
  return (
    <>
    <div>Number of Cakes {numOfCakes}</div>
    <button onClick={()=>dispatch(buyCakes())}>Buy cakes</button>
    </>
  )
}

export default HookCakeContainer