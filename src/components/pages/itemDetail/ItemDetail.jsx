import PropTypes from 'prop-types';

const ItemDetail = ({ product }) => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <img src={product.image} alt={product.name} className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <h2>{product.name}</h2>
                    <p>Precio: ${product.price}</p>
                    <p>{product.description}</p>
                </div>
            </div>
        </div>
    );
};

// Definir PropTypes
ItemDetail.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
};

export default ItemDetail;
