import React, { Component, PropTypes as PT } from 'react';
import c3 from 'c3';

class PieChart extends Component {
  componentDidMount() {
    this.chart = c3.generate({
      bindto: this.chartNode,
      data: {
        type: 'pie',
        columns: this.props.items,
      },
    });
  }

  render() {
    return (
      <div id="pie-chart" ref={node => this.chartNode = node} />
    );
  }
}

PieChart.propTypes = {
  items: PT.arrayOf(PT.array),
};

export default PieChart;
