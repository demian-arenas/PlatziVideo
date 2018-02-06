import React, { Component } from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video'
import Title from '../components/title'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer'
import Controls from '../components/video-player-controls'

class VideoPlayer extends Component {
  state = {
    pause: true
  }
  togglePlay = (event) => {
    this.setState((prevState, props) => {
      return {pause: !prevState.pause}
   })
  }

  componentDidMount() {
    this.setState((prevState, props) => {
      return {pause: (!props.autoplay)}
    })
  }

  handleLoadedMetadata = event => {
    this.video = event.target
    this.setState({
      duration: this.video.duration
    })
  }

  render() {
    return (
      <VideoPlayerLayout>
        <Title title='Esto es un video chido!' />
        <Controls>
          <PlayPause
            pause={this.state.pause}
            handleClick={this.togglePlay}
          />
          <Timer
            duration={this.state.duration}
          />
        </Controls>
        <Video
          handleLoadedMetadata={this.handleLoadedMetadata}
          pause={this.state.pause}
          autoplay={this.props.autoplay}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer
