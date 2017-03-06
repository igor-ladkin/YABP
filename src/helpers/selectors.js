import { values, filter } from 'lodash';

export const filteredChartItems = state => (
  filter(
    values(state.stats.likes),
    ([, count]) => Number(count) > 0,
  )
);
