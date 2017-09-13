import React from 'react'
import { connect } from 'react-redux'
import Video from './Video'
import { play, addToQueue, deleteFromQueue } from '../actions'

const VideoQueue = ({ dispatch, queue }) => {
  const handlePlay = (index, video) => {
    if (queue.length > 0 && queue.indexOf(video) !== -1) {
      dispatch(deleteFromQueue(index));
      dispatch(addToQueue(video));
    }
    dispatch(play(video));
  };

  return (
    <ul className="list-group">
      {queue.map((video, key) =>
        <Video
          key={key}
          index={key}
          onClick={handlePlay}
          video={video}
        />
      )}
    </ul>
  )
};

const mapStateToProps = (state, ownProps) => {
  return {
    queue: state.queue
  }
};

export default connect(mapStateToProps)(VideoQueue)