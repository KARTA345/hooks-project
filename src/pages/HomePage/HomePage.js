import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Ilumina Tus Celebraciones</h1>
          <p className="hero-subtitle">
            Pirotecnia legal y certificada. Calidad profesional, uso responsable. 
            Todo lo que necesitas para crear momentos inolvidables.
          </p>
          <div className="hero-actions">
            <Link to="/tienda" className="btn btn-primary">
              Explorar Catálogo
            </Link>
            <Link to="/seguridad" className="btn btn-secondary">
              Guía de Seguridad
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Productos</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Certificados</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Soporte</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2>¿Por qué elegir PyroShop?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Productos Certificados</h3>
              <p>Todos nuestros productos cumplen con los estándares de seguridad y calidad internacionales.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3>Envío Seguro</h3>
              <p>Embalaje especializado para transporte seguro de productos pirotécnicos.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📞</div>
              <h3>Asesoramiento Expertos</h3>
              <p>Especialistas en pirotecnia disponibles para guiarte en tu compra.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;