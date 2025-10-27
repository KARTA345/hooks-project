import React from 'react';
import Header from '../../components/Header';
import './TiendaPage.css';

const TiendaPage = () => {
  return (
    <div className="tienda-page">
      <Header />
      <div className="container">
        <h1>🎇 Tienda de Fuegos Artificiales</h1>
        <p>Explora nuestra amplia gama de productos pirotécnicos</p>
        {/* Aquí irá el catálogo de productos */}
        <div className="placeholder-section">
          <p>Catálogo de productos en construcción...</p>
        </div>
      </div>
    </div>
  );
};

export default TiendaPage;