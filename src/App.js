import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/loginpage/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage/ForgotPasswordPage';
import RegisterPage  from './pages/RegisterPage/RegisterPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import ResetPasswordPage from './pages/ResetPasswordPage/ResetPasswordPage';
import ProtectedRoute from './pages/components/ProtectedRoute';
//import StateContador from './playground/useState/useState';
import HooksGral from './playground/HooksGral';
import UseStateHook from './playground/useState';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/forgot" element={<ForgotPasswordPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/dashboard" element={<ProtectedRoute> <DashboardPage /> </ProtectedRoute> } />
      <Route path="/reset-password" element={<ResetPasswordPage />} />

      <Route path="/hooks" element={<HooksGral/>}/>
      <Route path="/usestate" element={<UseStateHook/>}/>
      
    </Routes>
    </BrowserRouter>
  );
  
}

export default App;
