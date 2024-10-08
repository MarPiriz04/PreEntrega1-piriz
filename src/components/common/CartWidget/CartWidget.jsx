import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.css';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <FaShoppingCart size={24} />
      <span className="badge bg-danger ms-2">3</span> {/* Número de productos en el carrito */}
    </div>
  );
};

export default CartWidget;

