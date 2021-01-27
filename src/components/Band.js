import React, { Component } from 'react'

class Band extends Component {
  
  render() {
    console.log(this.props)
    return (
      <div>
        <li>{this.props.band.name}</li>
        <button onClick={() => this.props.delete(this.props.band.id)}>Delete Band</button>
      </div>
    )
  }
}
export default Band