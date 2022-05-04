import React from 'react';

import { Hero, Section, ContactUs, AboutSection } from '../../components/atoms';

// services

import './styles.scss';

const Welcome = () => {
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
