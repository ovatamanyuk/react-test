import { ADD_TO_QUEUE, DELETE_FROM_QUEUE } from '../actions'

const queue = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_QUEUE:
      return [
        ...state,
        action.videoId
      ]
    case DELETE_FROM_QUEUE:
      let temp = state.slice(0);
      temp.splice(action.key);
      return temp;
    default:
      return state
  }
}

export default queue