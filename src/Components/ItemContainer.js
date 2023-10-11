import React from 'react'
import { connect } from 'react-redux'
import { buyCakes,buyIceCreams } from '../REDUX'

const ItemContainer=(props)=>{
  return (
    <>
    <div>Items = {props.items} </div>
    <button onClick={props.buyItems}>Buy items </button>
    </>
  )
}

const mapStateToProps=(state,ownProps)=>{
    const itemState=ownProps.Cake?state.Cake.numOfCakes:state.IceCream.numOfIceCreams
    return {
        items:itemState
    }
}

const mapDispatchToProps=(dispatch,ownProps)=>{
const dispatchFunction=ownProps.Cake?()=>dispatch(buyCakes()):()=>dispatch(buyIceCreams())
return{
    buyItems:dispatchFunction
}
}
export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer)