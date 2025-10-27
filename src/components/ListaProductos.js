import React from 'react';
import { useProductos } from '../hooks/useProductos';

const ListaProductos = () => {
  const { productos, loading, error, eliminarProducto } = useProductos();

  if (loading) return (
    <div className="text-center mt-4">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Cargando productos...</span>
      </div>
      <p className="mt-2">Cargando productos...</p>
    </div>
  );

  if (error) return (
    <div className="alert alert-danger mt-4" role="alert">
      {error}
    </div>
  );

  if (productos.length === 0) return (
    <div className="alert alert-info mt-4" role="alert">
      No hay productos en la tienda. ¡Agrega algunos!
    </div>
  );

  return (
    <div className="row mt-4">
      {productos.map(producto => (
        <div key={producto.id} className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <img 
              src={producto.imagen} 
              className="card-img-top" 
              alt={producto.nombre}
              style={{ height: '200px', objectFit: 'cover' }}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/300x200?text=Imagen+No+Disponible';
              }}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{producto.nombre}</h5>
              <p className="card-text flex-grow-1">{producto.descripcion}</p>
              <div className="mt-auto">
                <p className="card-text">
                  <strong className="h4 text-primary">${producto.precio}</strong>
                </p>
                <p className="card-text">
                  <span className={`badge ${producto.stock > 0 ? 'bg-success' : 'bg-danger'}`}>
                    Stock: {producto.stock}
                  </span>
                  <span className="badge bg-secondary ms-2">{producto.categoria}</span>
                </p>
                <button 
                  className="btn btn-outline-danger btn-sm mt-2"
                  onClick={() => {
                    if (window.confirm('¿Estás seguro de eliminar este producto?')) {
                      eliminarProducto(producto.id);
                    }
                  }}
                >
                  🗑️ Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListaProductos;