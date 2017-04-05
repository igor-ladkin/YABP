import { parse } from 'qs';
import { compact, map } from 'lodash';

export default function (store, state) {
  const { location, params, routes } = state;

  const query = parse(location.search.substr(1));

  const prepareDataFns = compact(map(routes, route => route.prepareData));

  return map(
    prepareDataFns,
    prepareData => prepareData(store, query, params, location),
  );
}
