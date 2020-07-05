/**
 *  Redux saga class init
 */
import { takeEvery, all } from 'redux-saga/effects';
import * as types from '../actions/types';
import getCharactersSaga from './getCharactersSaga';

export default function* watch() {
  yield all([takeEvery(types.GET_ALL_CHARS, getCharactersSaga)]);
}
