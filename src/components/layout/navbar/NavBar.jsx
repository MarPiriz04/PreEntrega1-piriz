import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Farmacia Veracierto</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/category/analgésicos" className="nav-link">Analgésicos</Link>
            </li>
            <li className="nav-item">
              <Link to="/category/suplementos" className="nav-link">Suplementos</Link>
            </li>
            <li className="nav-item">
              <Link to="/category/productos de higiene" className="nav-link">Productos de Higiene</Link>
            </li>
            <li className="nav-item">
              <Link to="/category/anticonceptivos" className="nav-link">Anticonceptivos</Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link">Carrito</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
