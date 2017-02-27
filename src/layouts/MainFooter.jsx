import React from 'react';
import { Segment, Icon } from 'semantic-ui-react';

const MainFooter = () => (
  <Segment
    color="red"
    textAlign="center"
    raised
  >
    Built with <Icon name="heart" color="red" />
    and React
  </Segment>
);

export default MainFooter;
