const createActionTypes = (base, types) => {
  const res = {};
  types.forEach(type => (res[type] = `${base}/${type}`));
  return res;
};

export const APP = createActionTypes('APP', [
  'UPDATE_STORE_STATE',
  'GET_FILMS_DATA',
  'UPDATE_STATE',
]);

export const AUTH = createActionTypes('AUTH', [
  'UPDATE_STATE_NOT_PERSIST',
]);
