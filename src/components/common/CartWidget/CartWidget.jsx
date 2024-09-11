import { FaShoppingCart } from 'react-icons/fa'; // Asegúrate de instalar react-icons

const CartWidget = () => {
  return (
    <div style={{ position: 'relative' }}>
      <FaShoppingCart style={{ color: 'white', fontSize: '1.5em' }} />
      <span
        style={{
          position: 'absolute',
          top: '-10px',
          right: '-15px',
          backgroundColor: 'red',
          borderRadius: '50%',
          padding: '2px 6px',
          color: 'white',
          fontSize: '0.8em',
        }}
      >
        3
      </span>
    </div>
  );
};

export default CartWidget;
