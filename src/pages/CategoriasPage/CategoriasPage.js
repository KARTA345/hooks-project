import React from 'react';
import Header from '../../components/Header';
import './CategoriasPage.css';

const CategoriasPage = () => {
  return (
    <div className="categorias-page">
      <Header />
      <div className="container">
        <h1>📦 Categorías</h1>
        <p>Encuentra productos por categoría</p>
        <div className="placeholder-section">
          <p>Categorías en construcción...</p>
        </div>
      </div>
    </div>
  );
};

export default CategoriasPage;