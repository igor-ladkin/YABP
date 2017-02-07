import React, { PropTypes as PT } from 'react';
import { Button } from 'semantic-ui-react';

const Like = ({ likeCount, handleClick }) => {
  return (
    <Button
      color="red"
      content="Like"
      icon="heart"
      label={{ basic: true, color: 'red', pointing: 'left', content: likeCount }}
      onClick={handleClick}
    />
  );
};

Like.propTypes = {
  likeCount: PT.number,
  handleClick: PT.func.isRequired,
};

Like.defaultProps = {
  likeCount: 0,
};

export default Like;
