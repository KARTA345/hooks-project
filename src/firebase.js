import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDv8R2SeIyGMafjw0uRUJwW7GoMAvT9nxY",
    authDomain: "reactproyecto-951bb.firebaseapp.com",
    projectId: "reactproyecto-951bb",
    storageBucket: "reactproyecto-951bb.firebasestorage.app",
    messagingSenderId: "776122626141",
    appId: "1:776122626141:web:125140a884763686b8ddb4",
    measurementId: "G-FXCZ47LCSR"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar servicios de Firebase UNA SOLA VEZ
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app); // ← SOLO UNA DECLARACIÓN DE db

// Exportar todo
export { auth, googleProvider, db, signOut };
export default app;