import React from 'react';
import { useHistory } from 'react-router';

// components
import { Button } from '~/components';

// assets
import logo from '~/assets/images/logo.svg';

// services

import './styles.scss';

const Welcome = () => {
  const history = useHistory();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React App</p>
        <div className="d-flex">
          <Button size="sm" onClick={() => history.push('/about')}>
            About
          </Button>
        </div>
      </header>
    </div>
  );
};

export default Welcome;
