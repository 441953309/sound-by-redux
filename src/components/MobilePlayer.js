import React, {Component, PropTypes} from 'react';
import {Motion, spring} from 'react-motion';

import MobilePlayerContent from './MobilePlayerContent'

class MobilePlayer extends Component {
  render() {
    const {playingSongId} = this.props;
    const isSongPlaying = playingSongId !== null;
    return (
      <Motion style={{height: spring(isSongPlaying ? 100 : 0)}}>
        {({height})=>
          <div className="mobile-player-container" style={{height}}>
            {isSongPlaying ? <MobilePlayerContent /> : <div />}
          </div>
        }
      </Motion>
    )
  }
}

MobilePlayer.propTypes = {
  playingSongId: PropTypes.number,
}

export default MobilePlayer;
