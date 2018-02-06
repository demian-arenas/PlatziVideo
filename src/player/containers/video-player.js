import React, { Component } from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video'
import Title from '../components/title'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer'
import Controls from '../components/video-player-controls'
import ProgressBar from '../components/progress-bar'
import Spinner from '../components/spinner'
import Volume from '../components/volume'
import FullScreen from '../components/full-screen'
import { formattedTime, isFullScreen, requestFullScreen, exitFullScreen } from '../../utils'

class VideoPlayer extends Component {
  state = {
    pause: true,
    duration: 0,
    currentTime: 0,
    durationTimer: 0,
    currentTimeTimer: 0,
    loading: true
  };
  togglePlay = event => {
    this.setState((prevState, props) => {
      return { pause: !prevState.pause };
    });
  };

  componentDidMount() {
    this.setState((prevState, props) => {
      return { pause: !props.autoplay };
    });
  }

  handleLoadedMetadata = event => {
    this.video = event.target;
    this.setState({
      durationTimer: formattedTime(this.video.duration),
      duration: this.video.duration
    });
  };

  handleTimeUpdate = event => {
    this.setState({
      currentTimeTimer: formattedTime(this.video.currentTime),
      currentTime: this.video.currentTime
    });
  };

  handleSeeked = event => {
    this.setState({
      loading: false
    });
  };

  handleReady = event => {
    this.setState({
      loading: false
    });
  };

  handleSeeking = event => {
    this.setState({
      loading: true
    });
  };

  handleProgressChange = event => {
    this.video.currentTime = event.target.value;
  };

  handleVolumeChange = event => {
    this.video.volume = event.target.value;
  };

  handleFullScreenClick = event => {
    if (isFullScreen()) return exitFullScreen()
    return requestFullScreen(this.player)
  }

  setRef = element => {
    this.player = element
  }

  render() {
    return (
      <VideoPlayerLayout
        setRef={this.setRef}
      >
        <Title title="Esto es un video chido!" />
        <Controls>
          <PlayPause pause={this.state.pause} handleClick={this.togglePlay} />
          <Timer
            duration={this.state.durationTimer}
            currentTime={this.state.currentTimeTimer}
          />
          <ProgressBar
            duration={this.state.duration}
            value={this.state.currentTime}
            handleProgressChange={this.handleProgressChange}
          />
          <Volume handleVolumeChange={this.handleVolumeChange} />
          <FullScreen handleFullScreenClick={this.handleFullScreenClick} />
        </Controls>
        {this.state.loading && <Spinner />}
        />
        <Video
          handleTimeUpdate={this.handleTimeUpdate}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
          handleReady={this.handleReady}
          pause={this.state.pause}
          autoplay={this.props.autoplay}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        />
      </VideoPlayerLayout>
    );
  }
}

export default VideoPlayer
