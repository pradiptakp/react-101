import * as types from './actionTypes';

export const getFilmsData = (onSuccess, onFailure) => {
  const type = types.APP.GET_FILMS_DATA;
  return {
    type,
    onSuccess, 
    onFailure,
  };
};