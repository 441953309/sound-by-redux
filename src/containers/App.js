import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {initEnvironment} from '../actions/environment'

import Main from '../components/Main';
import PlayerContainer from './PlayerContainer'


class App extends Component {

  componentDidMount() {
    const {actions} = this.props;
    actions.initEnvironment();
  }

  render() {
    const {isMobile, width, height} = this.props;
    console.log(isMobile)
    if (isMobile) {
      return (
        <div className="mobile" style={{width: `${width}px`, height: `${height}px`}}>
          <PlayerContainer />
        </div>
      );
    } else {
      return (
        <div className="mobile" style={{width: `${width}px`, height: `${height}px`}}>
          <PlayerContainer />
        </div>
      )
    }

  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  isMobile: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number
};

function mapStateToProps(state) {
  const {environment} = state;
  const {isMobile, width, height} = environment;
  return {
    isMobile,
    width,
    height
  };
}
function mapDispatchToProps(dispatch) {
  const actions = {
    initEnvironment
  };
  const actionMap = {actions: bindActionCreators(actions, dispatch)};
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
