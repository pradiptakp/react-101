import {APP} from '../actions/actionTypes';

const initialState = {
  showIntro: true,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP.UPDATE_STORE_STATE:
      return Object.assign({}, initialState, state);
    default:
      return state;
  }
};

export default appReducer;
