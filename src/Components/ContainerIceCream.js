import React from 'react'
import { buyIceCreams } from '../REDUX'
import { connect } from 'react-redux'

const ContainerIceCream=(props)=>{
  return (
    <>
    <div>Number of Ice Creams {props.numOfIceCreams}</div>
    <button onClick={props.buyIceCreams}>Buy Ice Creams</button>
    </>
  )
}

const mapStateToProps=(state)=>{
    return{
        numOfIceCreams:state.IceCream.numOfIceCreams
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        buyIceCreams:()=>{dispatch(buyIceCreams())}
    }
}




export default connect(mapStateToProps,mapDispatchToProps)(ContainerIceCream)