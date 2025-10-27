import React from 'react';
import Header from '../../components/Header';
import './OfertasPage.css';

const OfertasPage = () => {
  return (
    <div className="ofertas-page">
      <Header />
      <div className="container">
        <h1>🔥 Ofertas Especiales</h1>
        <p>Descuentos y promociones exclusivas</p>
        <div className="placeholder-section">
          <p>Ofertas en construcción...</p>
        </div>
      </div>
    </div>
  );
};

export default OfertasPage;