// export action creators
import * as navigationActions from './navigationActions';
import * as charactersActions from './charactersActions';
import * as commonActions from './commonActions';

export const ActionCreators = Object.assign(
  {},
  navigationActions,
  charactersActions,
  commonActions,
);
