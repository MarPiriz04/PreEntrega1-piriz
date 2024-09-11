
import NavBar from './components/layout/navbar/NavBar';
import ItemListContainer from './components/pages/itemListContainer/ItemListContainer';
import ProductCard from './components/common/productCard/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  const products = [
    { name: 'Producto 1', price: 100, image: 'https://via.placeholder.com/150' },
    { name: 'Producto 2', price: 200, image: 'https://via.placeholder.com/150' },
    { name: 'Producto 3', price: 300, image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="¡Bienvenidos a nuestra tienda!" />
      <Container>
        <Row>
          {products.map((product, index) => (
            <Col key={index} md={4}>
              <ProductCard
                name={product.name}
                price={product.price}
                image={product.image}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;





