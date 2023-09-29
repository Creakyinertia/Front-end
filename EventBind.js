import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          message:'Hello'
      }
    }
    clickHandler(){
        this.setState({
            message:"world"
        })
    }

    render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>CLick</button> */}
        <button onClick={()=>this.clickHandler()}>CLick</button>
      </div>
    )
  }
}

export default EventBind