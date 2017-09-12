import React, { Component } from 'react'

class Video extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.index, this.props.video)
  }

  render() {
    const video = this.props.video;
    return (
      <li className="list-group-item" onClick={this.handleClick}>
        {video}
      </li>
    )
  }
}

export default Video