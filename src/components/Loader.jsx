import React from 'react';
import { Segment, Dimmer, Loader as SemanticLoader } from 'semantic-ui-react';

const Loader = () => (
  <Segment className="main">
    <Dimmer active inverted>
      <SemanticLoader size="big" />
    </Dimmer>
  </Segment>
);

export default Loader;
