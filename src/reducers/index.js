import { combineReducers } from 'redux'
import queue from './queue'
import play from './play'

const videoApp = combineReducers({
  queue,
  play
});

export default videoApp