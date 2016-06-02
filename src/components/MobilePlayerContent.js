import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

class MobilePlayerContent extends Component {


  renderDurationBar() {
    const currentTime = 50;
    const duration = 100;

    if (duration !== 0) {
      const width = currentTime / duration * 100;
      return (
        <div
          className="mobile-player-seek-duration-bar"
          style={{ width: `${width}%` }}
        />
      );
    }

    return null;
  }

  render() {
    let isPlaying = true;

    return (
      <div className="mobile-player">
        <audio id="audio" ref="audio"
               src="https://api.soundcloud.com/tracks/17602302/stream?client_id=e582b63d83a5fb2997d1dbf2f62705da"></audio>
        <div className="mobile-player-bg"/>
        <div className="mobile-player-extras"/>
        <div className="mobile-player-content fade-in">
          <div className="mobile-player-info">
            <div className="mobile-player-title">
              放大法发放大法的撒
            </div>
            <div className="mobile-player-user">
              张三
            </div>
          </div>
          <div className="mobile-player-controls">
            <a className="mobile-player-button" href="#">
              <i className="ion-ios-rewind"></i>
            </a>
            <a className="mobile-player-button" href="#">
              <i className={isPlaying ? 'ion-ios-pause':'ion-ios-play'}></i>
            </a>
            <a className="mobile-player-button">
              <i className="ion-ios-fastforward"></i>
            </a>
          </div>
        </div>
        <div className="mobile-player-seek-bar">
          {this.renderDurationBar()}
        </div>
      </div>
    )
  }
}

export default MobilePlayerContent
