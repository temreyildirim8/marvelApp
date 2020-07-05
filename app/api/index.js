// General api to access data
export default function Api(path, method) {
  let options;
  options = {
    'Request Url': String(path),
    'Request Method': String(method),
    'Params': {
      'apikey': '4fd43eacd1d4e76e027e1a6bd5d77387',
      'ts': '1524867480',
      'hash': 'fff24ad8c4211e81c5bf69cb6edb678e'
    },
    'Headers': {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  };

  return fetch(path, options)
    .then(resp => resp.json())
    .then(json => json)
    .catch(error => error);
}
