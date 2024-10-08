// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import ProductCard from '../../common/productCard/ProductCard';
import { useParams } from 'react-router-dom'; // Importar para obtener parámetros de la URL
import products from '../../products';

// eslint-disable-next-line react/prop-types
const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams(); // Obtener la categoría desde los parámetros de la URL
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Filtrar productos según la categoría obtenida del parámetro categoryId
    if (categoryId) {
      const filtered = products.filter(product => product.category.toLowerCase() === categoryId.toLowerCase());
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products); // Mostrar todos los productos si no se selecciona una categoría
    }
  }, [categoryId]);

  return (
    <div className="container my-5">
      <h2>{greeting}</h2>
      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              stock={product.stock}
              image={product.image}
              addToCart={() => {}}
            />
          ))
        ) : (
          <p>No hay productos disponibles en esta categoría</p>
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;
