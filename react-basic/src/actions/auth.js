import * as types from './actionTypes';

export const updateStateNotPersist = (payload) => {
  const type = types.AUTH.UPDATE_STATE_NOT_PERSIST;
  return {
    type,
    payload,
  };
};