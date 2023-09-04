import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/section5.css';

const Section5 = () => {
  const { t } = useTranslation();

  return (
    <div className="section-5">
      <div className="title-container-s5">
        <p className="text-center title-content-s5">{t('section5.title')}</p>
      </div>
      <div className="download-icons">
        <a href="#" className="appstoreIcon" />
        <a href="#" className="playstoreIcon" />
      </div>
    </div>
  );
};

export default Section5;
