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

  componentWillReceiveProps(nextProps) {
    this.chart.load({
      columns: nextProps.items,
    });
  }

  componentWillUnmount() {
    console.log('Doing some garbage collecting');
    this.chart.destroy();
  }

  render() {
    return (
      <div>
        <div id="pie-chart" ref={node => this.chartNode = node} />
        <div id="close-button" onClick={this.props.handleChartClose}>&#10005;</div>
      </div>
    );
  }
}

PieChart.propTypes = {
  items: PT.arrayOf(PT.array),
  handleChartClose: PT.func,
};

export default PieChart;
