import React from 'react';
import { Link } from 'react-router-dom';
import { useProductos } from '../../hooks/useProductos';
import Swal from 'sweetalert2';

const ProductosPage = () => {
  const { productos, loading, error, eliminarProducto } = useProductos();

  const handleEliminar = async (id, nombre) => {
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: `Vas a eliminar el producto: ${nombre}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    });

    if (result.isConfirmed) {
      try {
        await eliminarProducto(id);
        Swal.fire('Eliminado!', 'El producto ha sido eliminado.', 'success');
      } catch (error) {
        Swal.fire('Error', 'No se pudo eliminar el producto.', 'error');
      }
    }
  };

  if (loading) return (
    <div className="container mt-4">
      <div className="text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        <p className="mt-2">Cargando productos...</p>
      </div>
    </div>
  );

  if (error) return (
    <div className="container mt-4">
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    </div>
  );

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="display-5">📦 Gestión de Productos</h1>
          <p className="lead">Administra los productos de tu tienda virtual</p>
        </div>
        <Link to="/productos/agregar" className="btn btn-primary">
          ➕ Agregar Producto
        </Link>
      </div>

      {productos.length === 0 ? (
        <div className="text-center py-5">
          <div className="alert alert-info">
            <h4>No hay productos</h4>
            <p>Comienza agregando tu primer producto a la tienda.</p>
            <Link to="/productos/agregar" className="btn btn-primary">
              Agregar Primer Producto
            </Link>
          </div>
        </div>
      ) : (
        <div className="row">
          {productos.map(producto => (
            <div key={producto.id} className="col-md-6 col-lg-4 mb-4">
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
                  </div>
                </div>
                <div className="card-footer">
                  <div className="btn-group w-100">
                    <button className="btn btn-outline-primary btn-sm">
                      ✏️ Editar
                    </button>
                    <button 
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => handleEliminar(producto.id, producto.nombre)}
                    >
                      🗑️ Eliminar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-4">
        <Link to="/dashboard" className="btn btn-outline-secondary">
          ← Volver al Dashboard
        </Link>
      </div>
    </div>
  );
};

export default ProductosPage;