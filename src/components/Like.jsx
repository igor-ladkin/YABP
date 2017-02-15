import React, { PropTypes } from 'react';
import { Button } from 'semantic-ui-react';

const Like = ({ likeCount, handleClick }) => (
  <Button
    basic
    color="red"
    content="Like"
    icon="heart"
    label={{ basic: true, color: 'red', pointing: 'left', content: likeCount }}
    onClick={handleClick}
    className="right floated"
  />
);

Like.propTypes = {
  likeCount: PropTypes.number,
  handleClick: PropTypes.func.isRequired,
};

Like.defaultProps = {
  likeCount: 0,
};

export default Like;
