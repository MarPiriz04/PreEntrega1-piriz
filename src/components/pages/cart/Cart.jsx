import PropTypes from 'prop-types';

const Cart = ({ cartItems, removeProduct, total }) => {
    return (
        <div className="container my-5">
            <h2 className="mb-4">Tu Carrito</h2>
            {cartItems.length === 0 ? (
                <div className="alert alert-info" role="alert">
                    No hay productos en el carrito.
                </div>
            ) : (
                <div>
                    {cartItems.map(item => (
                        <div key={item.id} className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={item.image} alt={item.name} className="img-fluid rounded-start" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">Precio: ${item.price}</p>
                                        <p className="card-text">Cantidad: {item.quantity}</p>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => removeProduct(item.id)}
                                        >
                                            Eliminar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <h3>Total: ${total}</h3>
                </div>
            )}
        </div>
    );
};

// Validación de PropTypes
Cart.propTypes = {
    cartItems: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            quantity: PropTypes.number.isRequired,
        })
    ).isRequired,
    removeProduct: PropTypes.func.isRequired,
    total: PropTypes.number.isRequired,
};

export default Cart;