import React from 'react'
import { buyCakes } from '../REDUX'
import { connect } from 'react-redux'

const ContainerCake=(props)=>{
  return (
    <>
    <div>Number of Cakes {props.numOfCakes}</div>
    <button onClick={props.buyCakes}>Buy cakes</button>
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
        buyCakes:()=>{dispatch(buyCakes())}
    }
}




export default connect(mapStateToProps,mapDispatchToProps)(ContainerCake)