import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';
import './AgeVerification.css';

const AgeVerification = () => {
  const navigate = useNavigate();
  const [agreed, setAgreed] = useState(false);

  const handleVerify = () => {
    if (agreed) {
      localStorage.setItem('ageVerified', 'true');
      navigate('/home');
    }
  };

  return (
    <div className="age-verification-overlay">
      <div className="age-verification-modal">
        {/* Header */}
        <div className="age-verification-header">
          <div className="d-flex align-items-center gap-3 mb-3">
            <div className="age-warning-icon">
              <AlertTriangle className="icon" />
            </div>
            <h2 className="age-verification-title">Verificación de Edad</h2>
          </div>
          <p className="age-verification-description">
            La venta de pirotecnia está regulada por ley. Confirme que es mayor de edad y acepta cumplir con las normativas de seguridad.
          </p>
        </div>
        
        {/* Content */}
        <div className="age-verification-content">
          <p className="age-warning-text">
            La venta de pirotecnia está regulada por ley y está prohibida para menores de edad.
          </p>
          <p className="age-warning-text">
            Para acceder a este sitio web, debe confirmar que tiene al menos 18 años y acepta
            cumplir con todas las normativas de seguridad y uso responsable de pirotecnia.
          </p>
          
          <div className="age-important-note">
            <p className="m-0">
              <strong>Importante:</strong> El uso inadecuado de productos pirotécnicos puede causar
              lesiones graves. Lea siempre las instrucciones de seguridad antes de usar.
            </p>
          </div>
        </div>
        
        {/* Checkbox Agreement */}
        <div className="age-agreement-section">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="age-verification"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="age-verification">
              Confirmo que tengo 18 años o más y acepto la{" "}
              <a href="#" className="age-link">Política de Venta Responsable</a>{" "}
              y las{" "}
              <a href="#" className="age-link">Condiciones de Uso</a>.
            </label>
          </div>
        </div>

        {/* Footer Button */}
        <div className="age-verification-footer">
          <button
            onClick={handleVerify}
            disabled={!agreed}
            className="btn age-verify-btn w-100"
          >
            Acceder al Sitio
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgeVerification;