export const ADD_TO_QUEUE = 'ADD_TO_QUEUE'
export const DELETE_FROM_QUEUE = 'DELETE_FROM_QUEUE'
export const PLAY = 'PLAY'

export const addToQueue = (videoId) => ({
    type: ADD_TO_QUEUE,
    videoId
})

export const play = (videoId) => ({
    type: PLAY,
    videoId
})

export const deleteFromQueue = (key) => ({
    type: DELETE_FROM_QUEUE,
    key: key
})

