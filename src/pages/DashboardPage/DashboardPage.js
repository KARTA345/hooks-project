// imports...
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown, Card, Row, Col, Button } from 'react-bootstrap';
import { FaSignOutAlt, FaBox, FaUsers, FaCalendar, FaCog, FaShoppingCart } from 'react-icons/fa';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import logo from '../../assets/brilla.png';
import userDefault from '../../assets/user.png'; 
import './DashboardPage.css';
import Swal from 'sweetalert2';

function DashboardPage() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  // Determinar foto de usuario
  const userPhoto = user?.photoURL || userDefault;

  // Agregamos el console.log para verificar qué foto se está usando
  console.log(
    user?.photoURL
      ? `Usuario tiene foto: ${user.photoURL}`
      : `Usuario SIN foto, se usará: ${userDefault}`
  );

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: 'Vas a cerrar sesión.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, cerrar sesión',
      cancelButtonText: 'No, quedarme',
    });

    if (result.isConfirmed) {
      try {
        await signOut(auth);
        sessionStorage.setItem("logout", "true"); 
        Swal.fire({
          icon: 'success',
          title: 'Sesión cerrada',
          text: '¡Has cerrado sesión exitosamente!',
          timer: 2000,
          showConfirmButton: false,
        }).then(() => {
          navigate('/');
        });
      } catch (error) {
        console.error("Error al cerrar sesión:", error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un problema al cerrar sesión.',
        });
      }
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <Navbar expand="lg" variant="dark" className="dashboard-navbar">
        <Container>
          <Navbar.Brand onClick={() => navigate('/dashboard')} style={{ cursor: 'pointer' }}>
            <img
              src={logo}
              alt="Brilla Logo"
              height="40"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavDropdown title="Personas" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => navigate('/clientes')}>
                  Clientes
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate('/auxiliares')}>
                  Auxiliares
                </NavDropdown.Item>
              </NavDropdown>
              
              {/* NUEVO: Menú de Productos */}
              <NavDropdown title="Productos" id="productos-nav-dropdown">
                <NavDropdown.Item onClick={() => navigate('/productos')}>
                  <FaBox className="me-2" />
                  Ver Todos los Productos
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate('/productos/agregar')}>
                  <FaShoppingCart className="me-2" />
                  Agregar Producto
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link onClick={() => navigate('/servicios')}>Servicios</Nav.Link>
              <Nav.Link onClick={() => navigate('/cronograma')}>Cronograma</Nav.Link>
              <Nav.Link onClick={() => navigate('/opcion1')}>Opción 1</Nav.Link>
              <Nav.Link onClick={() => navigate('/opcion2')}>Opción 2</Nav.Link>
              
              <Nav.Item className="logout-container" onClick={handleLogout}>
                <Nav.Link className="logout-link d-flex align-items-center gap-2">
                  <FaSignOutAlt /> Cerrar Sesión
                  <img
                    src={userPhoto}
                    alt="Foto de usuario"
                    className="user-photo-nav"
                  />
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* CONTENIDO PRINCIPAL */}
      <main className="main-content">
        <Container>
          <div className="text-center mb-5">
            <img src={logo} alt="Brilla Logo" className="main-logo" />
            <h1 className="welcome-title">Bienvenido a PowerUp Fitness</h1>
            <p className="welcome-text">
              Tu compañero definitivo para alcanzar tus metas de salud y bienestar.
            </p>

            <div className="user-info mb-4">
              <img
                src={userPhoto}
                alt="Foto de usuario"
                className="main-logo"
                style={{ maxWidth: '100px', borderRadius: '50%' }}
              />
              <p className="welcome-text">
                <strong>Nombre:</strong> {user?.displayName || "Sin nombre"}
              </p>
              <p className="welcome-text">
                <strong>Email:</strong> {user?.email || "Sin correo"}
              </p>
            </div>
          </div>

          {/* NUEVO: Tarjetas de Acceso Rápido */}
          <Row className="justify-content-center">
            <Col md={6} lg={4} className="mb-4">
              <Card className="h-100 shadow-sm border-0 dashboard-card">
                <Card.Body className="text-center">
                  <FaBox size={50} className="text-primary mb-3" />
                  <Card.Title>Gestión de Productos</Card.Title>
                  <Card.Text>
                    Administra el inventario de productos de tu tienda virtual. Agrega, edita o elimina productos.
                  </Card.Text>
                  <Button 
                    variant="primary" 
                    onClick={() => navigate('/productos')}
                    className="w-100"
                  >
                    Gestionar Productos
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4} className="mb-4">
              <Card className="h-100 shadow-sm border-0 dashboard-card">
                <Card.Body className="text-center">
                  <FaUsers size={50} className="text-success mb-3" />
                  <Card.Title>Gestión de Personas</Card.Title>
                  <Card.Text>
                    Administra clientes y auxiliares de tu aplicación.
                  </Card.Text>
                  <div className="d-grid gap-2">
                    <Button 
                      variant="outline-success" 
                      onClick={() => navigate('/clientes')}
                    >
                      Clientes
                    </Button>
                    <Button 
                      variant="outline-success" 
                      onClick={() => navigate('/auxiliares')}
                    >
                      Auxiliares
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4} className="mb-4">
              <Card className="h-100 shadow-sm border-0 dashboard-card">
                <Card.Body className="text-center">
                  <FaCalendar size={50} className="text-warning mb-3" />
                  <Card.Title>Cronograma</Card.Title>
                  <Card.Text>
                    Gestiona horarios, citas y programación de actividades.
                  </Card.Text>
                  <Button 
                    variant="warning" 
                    onClick={() => navigate('/cronograma')}
                    className="w-100"
                  >
                    Ver Cronograma
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Acciones Rápidas */}
          <Row className="mt-5">
            <Col>
              <div className="text-center">
                <h3>Acciones Rápidas</h3>
                <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
                  <Button 
                    variant="outline-primary" 
                    onClick={() => navigate('/productos/agregar')}
                    className="d-flex align-items-center gap-2"
                  >
                    <FaShoppingCart /> Agregar Producto
                  </Button>
                  <Button 
                    variant="outline-success" 
                    onClick={() => navigate('/auxiliares')}
                    className="d-flex align-items-center gap-2"
                  >
                    <FaUsers /> Gestionar Auxiliares
                  </Button>
                  <Button 
                    variant="outline-info" 
                    onClick={() => navigate('/servicios')}
                    className="d-flex align-items-center gap-2"
                  >
                    <FaCog /> Servicios
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </main>

      {/* FOOTER */}
      <footer className="footer mt-auto">
        <div className="container">
          <small>© 2025 Brilla. All rights reserved.</small>
        </div>
      </footer>
    </>
  );
}

export default DashboardPage;