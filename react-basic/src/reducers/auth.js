import {AUTH} from '../actions/actionTypes';

const initialState = {
  testStateNotPersist: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH.UPDATE_STATE_NOT_PERSIST:
      console.log(`action.payload`)
      console.log(action.payload)
      return {testStateNotPersist: action.payload, ...state};
    default:
      return state;
  }
};

export default authReducer;
