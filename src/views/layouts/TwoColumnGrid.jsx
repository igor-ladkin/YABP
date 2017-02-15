import React, { PropTypes } from 'react';
import { Grid } from 'semantic-ui-react';

const TwoColumnGrid = ({ children }) => (
  <Grid>
    <Grid.Row columns={2}>
      <Grid.Column width={12}>
        {children[0]}
      </Grid.Column>
      <Grid.Column width={4}>
        {children[1]}
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

TwoColumnGrid.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
};

export default TwoColumnGrid;
