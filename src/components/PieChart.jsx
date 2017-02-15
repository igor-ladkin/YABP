import React, { Component, PropTypes } from 'react';
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
    return (
      <div>
        <div id="pie-chart" ref={node => (this.chartNode = node)} />
        <button id="close-button" onClick={this.props.handleChartClose}>&#10005;</button>
      </div>
    );
  }
}

PieChart.propTypes = {
  items: PropTypes.arrayOf(PropTypes.array).isRequired,
  handleChartClose: PropTypes.func.isRequired,
};

export default PieChart;
