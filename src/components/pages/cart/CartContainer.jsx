// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Cart from './Cart';
import Swal from 'sweetalert2';

const CartContainer = () => {
    const [cartItems, setCartItems] = useState([]);

    // Añadir un producto al carrito
    // eslint-disable-next-line no-unused-vars
    const addToCart = (product) => {
        const existingItem = cartItems.find(item => item.name === product.name);

        if (existingItem) {
            Swal.fire({
                title: 'Producto ya en carrito',
                text: `${product.name} ya está en el carrito`,
                icon: 'info',
                confirmButtonText: 'OK'
            });
        } else {
            setCartItems([...cartItems, product]);
            Swal.fire({
                title: 'Producto añadido',
                text: `${product.name} se ha añadido al carrito`,
                icon: 'success',
                confirmButtonText: 'OK'
            });
        }
    };

    // Eliminar un producto del carrito
    const removeProduct = (productId) => {
        setCartItems(cartItems.filter(item => item.id !== productId));
        Swal.fire({
            title: 'Producto eliminado',
            text: 'El producto ha sido eliminado del carrito',
            icon: 'info',
            confirmButtonText: 'OK'
        });
    };

    // Obtener el total del carrito
    const getTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="container my-5">
            <Cart
                cartItems={cartItems}
                removeProduct={removeProduct}
                total={getTotal()}
            />
            {cartItems.length > 0 && (
                <button onClick={() => Swal.fire('Compra realizada', `Total: $${getTotal()}`, 'success')} className="btn btn-success mt-4">
                    Finalizar Compra
                </button>
            )}
        </div>
    );
};

export default CartContainer;
