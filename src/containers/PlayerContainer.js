import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import MobilePlayer from '../components/MobilePlayer'

class PlayerContainer extends Component {
  render() {
    const {isMobile} = this.props;
    return <MobilePlayer {...this.props}/>
  }
}

PlayerContainer.propTypes = {
  isMobile: PropTypes.bool
}

function mapStateToProps(state) {
  const {environment} = state;
  const {isMobile} = environment;
  const playingSongId = 1;
  return {
    isMobile,
    playingSongId
  };
}
function mapDispatchToProps(dispatch) {
  const actions = {};
  const actionMap = {actions: bindActionCreators(actions, dispatch)};
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer);
