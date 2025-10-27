import { db } from '../firebase';
import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  // updateDoc,  // ← Para uso futuro
  deleteDoc,
  serverTimestamp 
} from 'firebase/firestore';

// Obtener todos los productos
export const getProductos = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'productos'));
    const productos = [];
    querySnapshot.forEach((doc) => {
      productos.push({ 
        id: doc.id, 
        ...doc.data() 
      });
    });
    return productos;
  } catch (error) {
    console.error('Error obteniendo productos:', error);
    throw error;
  }
};

// Agregar nuevo producto
export const addProducto = async (producto) => {
  try {
    const docRef = await addDoc(collection(db, 'productos'), {
      nombre: producto.nombre,
      precio: parseFloat(producto.precio),
      descripcion: producto.descripcion,
      imagen: producto.imagen,
      categoria: producto.categoria,
      stock: parseInt(producto.stock),
      createdAt: serverTimestamp()
    });
    return { id: docRef.id, ...producto };
  } catch (error) {
    console.error('Error agregando producto:', error);
    throw error;
  }
};

// Eliminar producto
export const deleteProducto = async (id) => {
  try {
    await deleteDoc(doc(db, 'productos', id));
  } catch (error) {
    console.error('Error eliminando producto:', error);
    throw error;
  }
};