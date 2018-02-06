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
      handleLoadedMetadata,
      handleTimeUpdate,
      handleSeeking,
      handleSeeked,
      handleReady
    } = this.props
    return (
      <div className="Video">
        <video
          ref={this.setRef}
          autoPlay={this.props.autoplay}
          src={this.props.src}
          onLoadedMetadata={handleLoadedMetadata}
          onTimeUpdate={handleTimeUpdate}
          onSeeking={handleSeeking}
          onSeeked={handleSeeked}
          onCanPlayThrough={handleReady}
        />
      </div>
    );
  }
}

export default Video;
