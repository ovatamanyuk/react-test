import React from 'react';
import { connect } from 'react-redux'
import YouTube from 'react-youtube';

const Player = ({ play }) => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1
    }
  };

  const _onReady = (event) => {
    event.target.pauseVideo();
  }

  return (
    <YouTube
      videoId={play}
      opts={opts}
      onReady={_onReady}
    />
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    play: state.play
  }
}

export default connect(mapStateToProps)(Player);