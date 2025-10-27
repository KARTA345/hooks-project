import React from 'react';
import Header from '../../components/Header';
import './SeguridadPage.css';

const SeguridadPage = () => {
  return (
    <div className="seguridad-page">
      <Header />
      <div className="container">
        <h1>🛡️ Guía de Seguridad</h1>
        <p>Uso responsable de productos pirotécnicos</p>
        <div className="safety-content">
          <h3>Normas de Seguridad Básicas</h3>
          <ul>
            <li>✅ Siempre leer las instrucciones antes de usar</li>
            <li>✅ Usar en áreas abiertas y despejadas</li>
            <li>✅ Mantener distancia de personas y edificios</li>
            <li>✅ Tener agua o extintor cerca</li>
            <li>✅ No permitir que menores manipulen productos</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SeguridadPage;