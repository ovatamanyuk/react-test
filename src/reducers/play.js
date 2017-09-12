import { PLAY } from '../actions'

const play = (state = '', action) => {
    switch (action.type) {
        case PLAY:
            return state = action.videoId
        default:
            return state
    }
}

export default play