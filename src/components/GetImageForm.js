import React, { Component } from "react"

class GetImageForm extends Component {
  render() {
    return (
      <div className="form">
        {this.props.children}
      </div>
    )
  }
}

export default GetImageForm
