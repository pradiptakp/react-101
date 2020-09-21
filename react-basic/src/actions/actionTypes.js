const createActionTypes = (base, types) => {
  const res = {};
  types.forEach(type => (res[type] = `${base}/${type}`));
  return res;
};

export const APP = createActionTypes('APP', [
  'UPDATE_STORE_STATE',
  'GET_FILMS_DATA',
]);

export const AUTH = createActionTypes('AUTH', [
  
]);
