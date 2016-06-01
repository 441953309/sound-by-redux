import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

class MobilePlayerContent extends Component {
  render() {
    return (
      <div className="mobile-player">
        <audio id="audio" ref="audio"
               src="https://api.soundcloud.com/tracks/17602302/stream?client_id=e582b63d83a5fb2997d1dbf2f62705da"></audio>
        <div className="mobile-player-bg"/>
        <div className="mobile-player-extras" />
        <div className="mobile-player-content fade-in">
          <div className="mobile-player-info">
            <div className="mobile-player-title">
              SAMIRA SAID | MAZAL | OFFICIAL SONG
            </div>
            <div className="mobile-player-user">
              Ahmed Tawfiq ❼
            </div>
          </div>
          <div className="mobile-player-controls">
            <a className="mobile-player-button">
              箭头
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default MobilePlayerContent
