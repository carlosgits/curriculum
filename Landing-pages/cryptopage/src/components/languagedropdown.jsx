import React, { useState } from 'react';
import '../styles/languagedropdown.css';
import { useTranslation } from 'react-i18next';
import FlagSpanish from '../flags/es-flag';
import FlagEnglish from '../flags/us-flag';
import FlagFrench from '../flags/fr-flag';
import { changeLanguage } from 'i18next';


const LanguageSelector = () => {

  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  }
}

const Dropdown = () => {
  const [language, setLanguage] = useState('en');
  const flagMap = {
    'en': <FlagEnglish  width="25px" height="25px"/>,
    'fr': <FlagFrench   width="25px" height="25px"/>,
    'es': <FlagSpanish  width="25px" height="25px"/>,
  };

  

  return (
    <div className="dropdown-container">
      <div className="flag-container">
        {flagMap[language]}
      </div>
      <select value={language} onChange={(e) =>{ setLanguage(e.target.value); 
      changeLanguage(e.target.value)
      }} className="dropdown">
        <option value="en"> En-us</option>
        <option value="fr">Fr-fr</option>
        <option value="es">Es-es</option>
      </select>
      
    </div>
  );
};

export default Dropdown;
