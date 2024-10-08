import React from "react";
import "./Home.css";
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation(); 

  return (
    <div className="max-w-screen-2xl  font-bold  container">
      <div className="home-container">
        <h1 className="text-xl md:text-7xl font-bold">{t('Welcome to Ten HR Consulting')}</h1> 
      </div>
    </div>
  );
}

export default Home;
