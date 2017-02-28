import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { chain } from 'lodash';

import PieChart from 'components/PieChart';

const PieChartContainer = ({ items, handleChartClose }) => {
  const chartItems =
    chain(items)
      .filter(({ meta }) => Number(meta.likeCount) > 0)
      .map(({ title, meta }) => {
        const name = title.split('. ')[1].replace('.', '');
        return [name, Number(meta.likeCount)];
      }).value();

  return <PieChart items={chartItems} handleChartClose={handleChartClose} />;
};

PieChartContainer.propTypes = {
  items: PropTypes.array.isRequired,
  handleChartClose: PropTypes.func.isRequired,
};

const stateToProps = (state) => {
  const { items } = state.posts;
  return { items };
};

export default connect(stateToProps)(PieChartContainer);
