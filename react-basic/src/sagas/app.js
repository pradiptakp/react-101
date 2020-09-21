import { takeLatest } from 'redux-saga/effects';
import * as types from '../actions/actionTypes';
import {
    getFilmsUrl,
} from '../constants/urls';
import axios from 'axios';

function* getFilms(action) {
  try {
    const request = yield axios
      .get(getFilmsUrl)
      .then(response => response.data);
    action.onSuccess(request);
  } catch (error) {
    action.onFailure(error);
  }
}

export default function* root() {
    yield takeLatest(types.APP.GET_FILMS_DATA, getFilms);
}