import React, { PropTypes } from 'react';
import moment from 'moment';

const MetaInfo = ({ author, createdAt, updatedAt }) => (
  <div>
    {
      createdAt === updatedAt
      ? <span>created: {moment(createdAt).fromNow()}</span>
      : <span>updated: {moment(updatedAt).fromNow()}</span>
    }
    <span>by {author}</span><br />
  </div>
);

MetaInfo.propTypes = {
  author: PropTypes.string,
  createdAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
};

MetaInfo.defaultProps = {
  author: 'Anonymous',
};

export { MetaInfo };
