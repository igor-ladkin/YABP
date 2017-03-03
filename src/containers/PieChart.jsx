import { connect } from 'react-redux';

import PieChart from 'components/PieChart';
import { filteredChartItems } from 'helpers/selectors';

const stateToProps = state => ({
  items: filteredChartItems(state),
});

export default connect(stateToProps)(PieChart);
