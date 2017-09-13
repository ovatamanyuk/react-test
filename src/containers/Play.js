import React from 'react'
import { connect } from 'react-redux'
import { play, addToQueue } from '../actions'

let Play = ({ dispatch, queue }) => {
    let input;

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!input.value.trim()) {
            return
        }
        let video_id = input.value.split('v=')[1];
        let ampersandPosition = video_id.indexOf('&');
        if (ampersandPosition !== -1) {
            video_id = video_id.substring(0, ampersandPosition);
        }

        if(queue.indexOf(video_id) === -1) {
            dispatch(addToQueue(video_id));
        }

        dispatch(play(video_id));
        input.value = '';
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="form-inline my-12 my-lg-12">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="YouTube video link" ref={node => {
                        input = node
                    }} />
                    <span className="input-group-btn">
                        <button className="btn btn-secondary" type="submit">Watch</button>
                    </span>
                </div>
            </form>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => {
    return {
        queue: state.queue
    }
};

export default connect(mapStateToProps)(Play)