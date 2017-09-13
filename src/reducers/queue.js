import {ADD_TO_QUEUE, DELETE_FROM_QUEUE} from '../actions'

const queue = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_QUEUE:
            let add = state;
            add.unshift(action.videoId);
            return add;
        case DELETE_FROM_QUEUE:
            let remove = state;
            remove.splice(action.key, 1);
            return remove;
        default:
            return state
    }
}

export default queue