import React, { Component } from "react";
import "./video.css";

class Video extends Component {
  togglePlay = () => {
    if (this.props.pause ) return this.video.play()
    return this.video.pause()
  }

 componentWillReceiveProps(nextProps) {
   if (nextProps.pause !== this.props.pause) {
     this.togglePlay()
   }
  }

  setRef = element => {
    this.video = element
  }

  render() {
    const {
      handleLoadedMetadata
    } = this.props
    return (
      <div className="Video">
        <video
          ref={this.setRef}
          onLoadedMetadata={handleLoadedMetadata}
          autoPlay={this.props.autoplay}
          src={this.props.src}
        />
      </div>
    );
  }
}

export default Video;
