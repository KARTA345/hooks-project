import { useState, useEffect } from 'react';
import { getProductos, addProducto, deleteProducto } from '../services/productosService';

export const useProductos = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Cargar productos al iniciar
  useEffect(() => {
    loadProductos();
  }, []);

  const loadProductos = async () => {
    try {
      setLoading(true);
      const data = await getProductos();
      setProductos(data);
      setError(null);
    } catch (err) {
      setError('Error cargando productos');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Agregar producto
  const agregarProducto = async (productoData) => {
    try {
      const nuevoProducto = await addProducto(productoData);
      setProductos(prev => [...prev, nuevoProducto]);
      return nuevoProducto;
    } catch (err) {
      setError('Error agregando producto');
      throw err;
    }
  };

  // Eliminar producto
  const eliminarProducto = async (id) => {
    try {
      await deleteProducto(id);
      setProductos(prev => prev.filter(producto => producto.id !== id));
    } catch (err) {
      setError('Error eliminando producto');
      throw err;
    }
  };

  return {
    productos,
    loading,
    error,
    agregarProducto,
    eliminarProducto,
    refetch: loadProductos
  };
};