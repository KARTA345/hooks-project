import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useProductos } from '../../hooks/useProductos';
import Swal from 'sweetalert2';

const AgregarProductoPage = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    precio: '',
    descripcion: '',
    imagen: '',
    categoria: '',
    stock: ''
  });
  
  const [loading, setLoading] = useState(false);
  const { agregarProducto } = useProductos();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await agregarProducto(formData);
      await Swal.fire({
        title: '¡Éxito!',
        text: 'Producto agregado correctamente',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      navigate('/productos');
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'No se pudo agregar el producto',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1>Agregar Nuevo Producto</h1>
            <Link to="/productos" className="btn btn-outline-secondary">
              ← Volver
            </Link>
          </div>

          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre del Producto *</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="precio" className="form-label">Precio *</label>
                    <input
                      type="number"
                      step="0.01"
                      className="form-control"
                      id="precio"
                      name="precio"
                      value={formData.precio}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="descripcion" className="form-label">Descripción *</label>
                  <textarea
                    className="form-control"
                    id="descripcion"
                    name="descripcion"
                    rows="3"
                    value={formData.descripcion}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label htmlFor="imagen" className="form-label">URL de la Imagen</label>
                  <input
                    type="url"
                    className="form-control"
                    id="imagen"
                    name="imagen"
                    value={formData.imagen}
                    onChange={handleChange}
                    placeholder="https://ejemplo.com/imagen.jpg"
                  />
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="categoria" className="form-label">Categoría *</label>
                    <select
                      className="form-select"
                      id="categoria"
                      name="categoria"
                      value={formData.categoria}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Seleccionar categoría</option>
                      <option value="electronica">Electrónica</option>
                      <option value="ropa">Ropa</option>
                      <option value="hogar">Hogar</option>
                      <option value="deportes">Deportes</option>
                      <option value="libros">Libros</option>
                      <option value="otros">Otros</option>
                    </select>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="stock" className="form-label">Stock *</label>
                    <input
                      type="number"
                      className="form-control"
                      id="stock"
                      name="stock"
                      value={formData.stock}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <Link to="/productos" className="btn btn-secondary me-md-2">
                    Cancelar
                  </Link>
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                        Guardando...
                      </>
                    ) : (
                      'Guardar Producto'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgregarProductoPage;