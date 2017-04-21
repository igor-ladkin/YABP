import React, { Component, PropTypes } from 'react';

import AsideControl from 'layouts/AsideControl';

class PieChart extends Component {
  componentDidMount() {
    if (__CLIENT__) {
      const c3 = require('c3');

      this.chart = c3.generate({
        bindto: this.chartNode,
        data: {
          type: 'pie',
          columns: this.props.items,
        },
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    this.chart.load({
      columns: nextProps.items,
    });
  }

  componentWillUnmount() {
    console.log('Doing some garbage collecting'); // eslint-disable-line
    this.chart.destroy();
  }

  render() {
    const { handleChartClose } = this.props;

    return (
      <AsideControl handleClose={handleChartClose}>
        <div id="pie-chart" ref={node => (this.chartNode = node)} />
      </AsideControl>
    );
  }
}

PieChart.propTypes = {
  items: PropTypes.arrayOf(PropTypes.array).isRequired,
  handleChartClose: PropTypes.func.isRequired,
};

export default PieChart;
