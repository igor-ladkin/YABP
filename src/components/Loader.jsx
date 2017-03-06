import React from 'react';
import { Dimmer, Loader as SemanticLoader } from 'semantic-ui-react';

const Loader = () => (
  <Dimmer active inverted>
    <SemanticLoader size="big" />
  </Dimmer>
);

export default Loader;
