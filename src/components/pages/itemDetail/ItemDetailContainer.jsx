// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Simulación de productos que pueden venir de una API
        const mockProducts = [
            { id: 1, name: 'Producto 1', price: 100, description: 'Descripción del producto 1', image: '/images/producto1.jpg' },
            { id: 2, name: 'Producto 2', price: 200, description: 'Descripción del producto 2', image: '/images/producto2.jpg' },
        ];

        const foundProduct = mockProducts.find(p => p.id === parseInt(id));
        setProduct(foundProduct);
    }, [id]);

    if (!product) {
        return <div>Cargando...</div>;
    }

    return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
