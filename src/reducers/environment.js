import * as types from '../constants/ActionTypes';

const initialState = {
  isMobile: false,
  width: null,
  height: null
}

export default function environment(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_IS_MOBILE:
      return Object.assign({}, state, {isMobile: action.isMobile});
    case types.CHANGE_WIDTH_AND_HEIGHT:
      return Object.assign({}, state, {
        width: action.width,
        height: action.height
      })
    default:
      return state;
  }
}
