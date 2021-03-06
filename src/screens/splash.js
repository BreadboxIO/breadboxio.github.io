import React from 'react';
import { BrandLogo } from '../components/brand-logo';
import { BrandTagline } from '../components/brand-tagline';
import { BrandTitle } from '../components/brand-title';

export const SplashScreen = () => {
  return (
    <div className="splash">
      <div className="splash__content">
        <BrandTitle />
        <BrandTagline />
        <BrandLogo />
      </div>
    </div>
  );
};
