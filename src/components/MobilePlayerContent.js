import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

class MobilePlayerContent extends Component {
  render() {
    return (
      <div className="mobile-player">
        <audio id="audio" ref="audio"
               src="https://api.soundcloud.com/tracks/17602302/stream?client_id=e582b63d83a5fb2997d1dbf2f62705da"></audio>
        <div className="mobile-player-bg"/>
        <div className="mobile-player-content fade-in">
          <div className="mobile-player-title">
            饭卡减肥的垃圾放得开拉进来
          </div>
        </div>
      </div>
    )
  }
}

export default MobilePlayerContent
