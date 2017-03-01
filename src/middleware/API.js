import request from 'superagent';
import { stringify } from 'qs';
import { pick } from 'lodash';
import { API_ROOT } from 'constants';

export const API_CALL = 'API_CALL';

function APICall({ endpoint, method, query, payload }) {
  return new Promise((resolve, reject) => {
    let r = request[method.toLowerCase()](`${API_ROOT}${endpoint}`);

    if (query) {
      r.query(stringify(query));
    }

    if (payload) {
      r = r.send(payload);
    }

    r.end((error, data) => (
      error ?
        reject(error) :
        resolve(data.body)
    ));
  });
}

function nextAction(action, data) {
  return { ...action, ...data, [API_CALL]: undefined };
}

export default store => next => action => {
  if (!action[API_CALL]) return next(action);

  const [requestType, successType, errorType] = action[API_CALL].types;

  next(nextAction(action, { type: requestType }));

  const promise = APICall(
    pick(action[API_CALL], ['endpoint', 'method', 'query', 'payload']),
  );

  promise.then(
    payload => next(nextAction(action, { payload, type: successType })),
    error => next(nextAction(action, { error, type: errorType })),
  );

  return promise;
};
