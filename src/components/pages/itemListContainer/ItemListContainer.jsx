import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

const ItemListContainer = ({ greeting }) => {
  return (
    <Container className="my-5">
      <h2>{greeting}</h2>
    </Container>
  );
};

ItemListContainer.propTypes = {
  greeting: PropTypes.string.isRequired,
};

export default ItemListContainer;
