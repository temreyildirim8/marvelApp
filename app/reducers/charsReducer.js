/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
  chars: {},
};

export const charsReducer = createReducer(initialState, {
  [types.GET_ALL_CHARS](state) {
    return {
      ...state,
    };
  },
  [types.GET_ALL_CHARS_SUCCESS](state, action) {
    return {
      ...state,
      chars: action.data.results,
    };
  },
});
