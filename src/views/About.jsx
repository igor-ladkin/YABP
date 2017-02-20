import React, { Component } from 'react';
import { Segment, Image, Header } from 'semantic-ui-react';
import request from 'superagent';

import Loader from 'components/Loader';
import OneColumnGrid from './layouts/OneColumnGrid';

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      avatar: {
        src: '/dist/img/avatar.png',
        alt: 'avatar',
      },
      title: 'Another amazing blog',
      description: '<p>Time of amazing stories has come.</p>',
    };
  }

  componentDidMount() {
    this.fetchAbout();
  }

  fetchAbout() {
    this.setState({ isLoading: true });

    request.get(
      'http://localhost:3001/about',
      {},
      (err, res) => {
        const { avatar, title, description } = res.body;
        this.setState({ avatar, title, description, isLoading: false });
      },
    );
  }

  render() {
    const { avatar, title, description, isLoading } = this.state;

    return (
      <OneColumnGrid>
        {
          isLoading ?
            <Loader /> :
            <Segment className="main">
              <Image
                bordered
                centered
                shape="circular"
                size="large"
                {...avatar}
              />
              <Header size="large" content={title} />
              <div dangerouslySetInnerHTML={{ __html: description }} />
            </Segment>
        }
      </OneColumnGrid>
    );
  }
}

export default About;
