import React, { PropTypes } from 'react';
import { Segment, Image, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';

import Loader from 'components/Loader';
import OneColumnGrid from './layouts/OneColumnGrid';

const About = ({ isFetching, info }) => (
  <OneColumnGrid>
    <Segment className="main">
      { isFetching ?
        <Loader /> :
        <div>
          <Image
            bordered
            centered
            shape="circular"
            size="large"
            {...info.avatar}
          />
          <Header size="large" content={info.title} />
          <div dangerouslySetInnerHTML={{ __html: info.description }} />
        </div> }
    </Segment>
  </OneColumnGrid>
);


About.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  info: PropTypes.shape({
    avatar: PropTypes.object,
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};

const stateToProps = (state) => {
  const { info, isFetching } = state.about;
  return { info, isFetching };
};

export default connect(stateToProps)(About);
