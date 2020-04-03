import React, { Component } from "react";

class Gif extends Component {
  //to prevent calling render -> to be more reactive
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.id !== this.props.id;
  }

  render() {
    if (!this.props.id) {
      return null;
    }

    const src = `https://media3.giphy.com/media/${this.props.id}/200.gif`;
    return <img src={src} alt="" className="gif" />;
  }
}

export default Gif;
