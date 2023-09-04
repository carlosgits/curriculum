import React from 'react';
import { useTranslation } from 'react-i18next';
import Dropdown from '../components/languagedropdown';
import '../styles/navSection.css';

const NavBar = () => {
  const { t } = useTranslation();

  return (
    <div className="navBar nav nav-tabs">
      <a className="k-title" href="#">
        {t('navBar.title')}
      </a>
      <div className="navLinks">
        <a href="#" className="navLink" id="howItWorks">
          {t('navBar.howItWorks')}
        </a>
        <a href="#" className="navLink" id="pricing">
          {t('navBar.pricing')}
        </a>
        <a href="#" className="navLink" id="contact">
          {t('navBar.contact')}
        </a>
        <a href="#" className="navLink" id="login">
          {t('navBar.login')}
        </a>
        <a href="#" className="navLink" id="signUp">
          {t('navBar.signUp')}
        </a>
      </div>
      <Dropdown />
    </div>
  );
};

export default NavBar;
