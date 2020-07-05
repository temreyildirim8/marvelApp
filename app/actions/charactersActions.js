import * as types from './types';

export function getCharacters() {
  return {
    type: types.GET_ALL_REPOS,
  };
}

export function getCharactersSuccess(response) {
  return {
    type: types.GET_ALL_REPOS_SUCCESS,
    response,
  };
}
