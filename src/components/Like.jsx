import React, { PropTypes as PT } from 'react';
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
  likeCount: PT.number,
  handleClick: PT.func.isRequired,
};

Like.defaultProps = {
  likeCount: 0,
};

export default Like;
