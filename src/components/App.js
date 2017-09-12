import React from 'react';
import Play from '../containers/Play'
import Player from './Player';
import VideoQueue from './VideoQueue';
import Categories from './Categories';

const App = (props) => {
  return (
    <div className="container">
      <div className="row row-offcanvas">
        <div className="col search-bar">
          <Play />
        </div>
      </div>
      <div className="row row-offcanvas row-offcanvas-right">
        <div className="col-12 col-md-9">
          <div className="row">
            <div className="col-12 col-lg-12">
              <Player />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3 sidebar-offcanvas">
          <VideoQueue />
        </div>
      </div>
      <div className="row row-offcanvas">
        <div className="col search-bar">
          <Categories />
        </div>
      </div>
    </div>
  );
}

export default App;