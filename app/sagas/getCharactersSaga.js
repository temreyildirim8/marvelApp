import { put, call } from 'redux-saga/effects';

import { Alert } from 'react-native';
import * as charactersActions from 'app/actions/charactersActions';
// import * as navigationActions from 'app/actions/navigationActions';
// import * as commonActions from 'app/actions/commonActions';
import getCharacters from '../api/methods/getCharacters';

export default function* getCharactersSaga() {
  const response = yield call(getCharacters);
  // yield put(commonActions.enableLoader());
  window.console.log('response1', response);
  if (response && !response.message) {
    // yield put(commonActions.disableLoader());
    window.console.log('response2', response);
    yield put(charactersActions.getCharactersSuccess(response));
    // yield call(navigationActions.navigateToRepo);
  } else {
    // yield put(commonActions.disableLoader());
    setTimeout(() => {
      Alert.alert('Getting Characters', response.message);
    }, 100);
  }
}
