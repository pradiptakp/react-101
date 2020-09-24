import {APP} from '../actions/actionTypes';

const initialState = {
  testState: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP.UPDATE_STORE_STATE:
      return Object.assign({}, initialState, state);
    case APP.UPDATE_STATE_NOT_PERSIST:
      return {testState: action.payload, ...state};
    default:
      return state;
  }
};

export default appReducer;
