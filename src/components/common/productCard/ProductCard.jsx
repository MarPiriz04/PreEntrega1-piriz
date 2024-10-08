import PropTypes from 'prop-types';

const ProductCard = ({ name, price, stock, image, addToCart }) => {
  return (
    <div className="col-md-4 my-3">
      <div className="card h-100 shadow-sm">
        <img src={image} alt={name} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Precio: ${price}</p>
          <p className="card-text">Stock disponible: {stock}</p>
          <button 
            className="btn btn-primary" 
            onClick={addToCart}
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

// Validación de PropTypes
ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductCard;
