import React, { useState, useEffect } from 'react';

import { Hero, Section, ContactUs, AboutSection } from '../../components/atoms';

// services

import './styles.scss';
import { useHistory, useLocation } from 'react-router-dom';

const Welcome = () => {
  const history = useHistory();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  useEffect(() => {
    //const token = user?.token;

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  if (user) {
    console.log('ada');
    console.log(user.result);
    if (
      user.result.community_address === '' &&
      user.result.community_id === '' &&
      user.result.community_nama === ''
    ) {
      console.log('belum lengkap');
      history.push('/lengkapi-data');
    }
  }

  return (
    <div>
      <Hero />
      <Section />
      <AboutSection />
      <ContactUs />
    </div>
  );
};

export default Welcome;
