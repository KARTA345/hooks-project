import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="app-header">
      <div className="header-container">
        {/* Logo */}
        <div className="header-logo" onClick={() => navigate('/home')}>
          <span className="logo-icon">🎆</span>
          <span className="logo-text">PyroShop</span>
        </div>

        {/* Navegación principal */}
        <nav className="header-nav">
          <Link to="/tienda" className="nav-link">
            Tienda
          </Link>
          <Link to="/categorias" className="nav-link">
            Categorías
          </Link>
          <Link to="/ofertas" className="nav-link">
            Ofertas
          </Link>
          <Link to="/seguridad" className="nav-link">
            Seguridad
          </Link>
        </nav>

        {/* Acciones del usuario */}
        <div className="header-actions">
          <button className="icon-btn" title="Buscar">
            🔍
          </button>
          <button className="icon-btn" title="Carrito">
            🛒
          </button>
          <Link to="/login" className="login-btn">
            Iniciar Sesión
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;