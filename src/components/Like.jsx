import React, { PropTypes as PT } from 'react';

const Like = ({ likeCount, handleClick }) => {
  return (
    <div>
      <span>{likeCount}</span>
      <button onClick={handleClick}>&#10084;</button>
    </div>
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
