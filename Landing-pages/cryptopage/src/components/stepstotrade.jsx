import React from 'react';
import { useTranslation } from 'react-i18next';
import "../styles/stepstotrade.css";

const StepsToTradeComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="stepsToTrade">
      <div className="container">
        <h1 className="tittle text-center">{t('stepstotrade.title')}</h1>
        <div className="oval-container">
          <p className="circle text-center">01</p>
          <p className="text-content">{t('stepstotrade.step1')}</p>
        </div>
        <div className="oval-container">
          <p className="circle text-center">02</p>
          <p className="text-content">{t('stepstotrade.step2')}</p>
        </div>
        <div className="oval-container">
          <p className="circle text-center">03</p>
          <p className="text-content">{t('stepstotrade.step3')}</p>
        </div>
        <div className="oval-container">
          <p className="circle text-center">04</p>
          <p className="text-content">{t('stepstotrade.step4')}</p>
        </div>
      </div>
    </div>
  );
}

export default StepsToTradeComponent;
