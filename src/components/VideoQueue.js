import React from 'react'
import { connect } from 'react-redux'
import Video from './Video'
import { play, addToQueue, deleteFromQueue } from '../actions'


const VideoQueue = ({ dispatch, queue, playing }) => {
  const handlePlay = (index, video) => {
    if (queue.length > 0) {
      dispatch(deleteFromQueue(index));
    }
    dispatch(play(video));
    dispatch(addToQueue(playing));
  }

  return (
    <ul className="list-group">
      {queue.slice(0).reverse().map((video, key) =>
        <Video
          key={key}
          index={key}
          onClick={handlePlay}
          video={video}
        />
      )}
    </ul>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    playing: state.play,
    queue: state.queue
  }
}

export default connect(mapStateToProps)(VideoQueue)