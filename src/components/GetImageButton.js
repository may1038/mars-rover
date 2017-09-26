import React, { Component } from "react"

class GetImageButton extends Component {
  render() {
    return (
      <div className="btn">
        <button onClick={this.props.fetchRoverImage}>Submit</button>
      </div>
    )
  }
}

export default GetImageButton
