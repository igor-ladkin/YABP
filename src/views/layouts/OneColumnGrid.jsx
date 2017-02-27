import React, { PropTypes } from 'react';
import { Grid } from 'semantic-ui-react';

const OneColumnGrid = ({ children }) => (
  <Grid>
    <Grid.Row columns={1}>
      <Grid.Column width={2} />
      <Grid.Column width={12}>
        {children}
      </Grid.Column>
      <Grid.Column width={2} />
    </Grid.Row>
  </Grid>
);

OneColumnGrid.propTypes = {
  children: PropTypes.node,
};

export default OneColumnGrid;
