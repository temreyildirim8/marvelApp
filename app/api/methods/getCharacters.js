import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function getCharacters() {
  return Api(ApiConstants.BASE_URL + ApiConstants.CHARACTERS, 'get');
}
