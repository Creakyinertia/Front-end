import React, { useState } from 'react'
import { buyCakes } from '../REDUX'
import { connect } from 'react-redux'

const NewCakeContainer=(props)=>{
    const [number,setnumber]=useState(1)
  return (
    <>
    <div>Number of Cakes {props.numOfCakes}</div>
    <input type='text' value={number} onChange={e=>setnumber(e.target.value)} />
    <button onClick={()=>props.buyCakes(number)}>Buy {number} cakes</button>
    </>
  )
}

const mapStateToProps=(state)=>{
    return{
        numOfCakes:state.Cake.numOfCakes
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        buyCakes:(number)=>dispatch(buyCakes(number))
    }
}




export default connect(mapStateToProps,mapDispatchToProps)(NewCakeContainer)