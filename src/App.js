import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

// Componentes de verificación y páginas públicas
import AgeVerification from './components/AgeVerification';
import HomePage from './pages/HomePage/HomePage';

// Rutas públicas existentes
import 'bootstrap/dist/css/bootstrap.min.css'
import LoginPage from './pages/loginpage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage/ForgotPasswordPage';
import NotFoundPage from  './pages/components/NotFoundPage';

// Rutas protegidas
import ProtectedRoute from './pages/components/ProtectedRoute';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import ResetPasswordPage from './pages/ResetPasswordPage/ResetPasswordPage';
import AuxiliaresPage from './pages/AuxiliaresPage/AuxiliaresPage';

// Nuevas rutas para productos
import ProductosPage from './pages/ProductosPage/ProductosPage';
import AgregarProductoPage from './pages/ProductosPage/AgregarProductoPage';

// Nuevas rutas para la tienda virtual
import TiendaPage from './pages/TiendaPage/TiendaPage';
import CategoriasPage from './pages/CategoriasPage/CategoriasPage';
import OfertasPage from './pages/OfertasPage/OfertasPage';
import SeguridadPage from './pages/SeguridadPage/SeguridadPage';

function App() {
  const [ageVerified, setAgeVerified] = useState(false);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    // PARA DESARROLLO: Siempre mostrar verificación
    // Comenta esta línea cuando quieras probar el flujo normal
   // localStorage.removeItem('ageVerified');
    
    const verified = localStorage.getItem('ageVerified') === 'true';
    console.log('Age verification status:', verified);
    setAgeVerified(verified);
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <BrowserRouter>
      {!ageVerified ? (
        <AgeVerification />
      ) : (
        <Routes>
          {/* Página de inicio después de verificación */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<Navigate to="/home" replace />} />

          {/* Nuevas rutas públicas de la tienda */}
          <Route path="/tienda" element={<TiendaPage />} />
          <Route path="/categorias" element={<CategoriasPage />} />
          <Route path="/ofertas" element={<OfertasPage />} />
          <Route path="/seguridad" element={<SeguridadPage />} />

          {/* Rutas públicas de autenticación */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />

          {/* Rutas protegidas con Firebase Auth */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          } />
          
          <Route path="/auxiliares" element={
            <ProtectedRoute>
              <AuxiliaresPage />
            </ProtectedRoute>
          } />

          {/* Nuevas rutas protegidas para productos */}
          <Route path="/productos" element={
            <ProtectedRoute>
              <ProductosPage />
            </ProtectedRoute>
          } />
          
          <Route path="/productos/agregar" element={
            <ProtectedRoute>
              <AgregarProductoPage />
            </ProtectedRoute>
          } />

          {/* Ruta genérica para páginas no encontradas */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;