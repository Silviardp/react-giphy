import React, { Component } from "react";

class Gif extends Component {
  render() {
    if (!this.props.id) {
      return null;
    }

    const src = `https://media3.giphy.com/media/${this.props.id}/200.gif`;
    return <img src={src} alt="" className="gif" />;
  }
}

export default Gif;
