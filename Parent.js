import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:'Parent'
      }
      this.greetparent=this.greetparent.bind(this)
    }
    greetparent(childName){
        alert(`hello ${this.state.parentName} from ${childName}`)
    }
    render() {
    return (
      <div>
        <Child greetHandler={this.greetparent}/>
      </div>
    )
  }
}

export default Parent