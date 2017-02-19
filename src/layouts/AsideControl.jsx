import React, { PropTypes } from 'react';
import { Segment, Button } from 'semantic-ui-react';

const AsideControl = ({ children, handleClose }) => (
  <Segment className="aside">
    <div className="close-button">
      <Button
        circular
        basic
        icon="close"
        size="tiny"
        floated="right"
        onClick={handleClose}
      />
    </div>
    {children}
  </Segment>
);

AsideControl.propTypes = {
  children: PropTypes.node,
  handleClose: PropTypes.func.isRequired,
};

export default AsideControl;
