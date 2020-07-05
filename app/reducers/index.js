/*
 * combines all th existing reducers
 */
import * as commonReducer from './commonReducer';
import * as reposReducer from './charsReducer';
export default Object.assign(commonReducer, reposReducer);
