import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/pages/itemListContainer/ItemListContainer';
import CartContainer from './components/pages/cart/CartContainer';  // Importamos el carrito
import NavBar from './components/layout/navbar/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenido a Farmacia" category="Analgésicos" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer greeting="Categoría" />} />
        <Route path="/cart" element={<CartContainer />} /> {/* Ruta para el carrito */}
      </Routes>
    </Router>
  );
}

export default App;
