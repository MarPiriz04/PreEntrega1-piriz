import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ProductCard = ({ name, price, image }) => {
  return (
    <Card style={{ width: '18rem', margin: '1rem auto' }}>
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Precio: ${price}</Card.Text>
        <Button variant="primary">Añadir al carrito</Button>
      </Card.Body>
    </Card>
  );
};

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProductCard;

