import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import "./ProductDetail.css";
import { Link } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const { food_list, addToCart } = useContext(StoreContext);
  const product = food_list.find(item => item._id === id);

  return (
    <div className="product-detail">
      <div className="product-detail-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-detail-info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <h3>Price: रु.{product.price}</h3>
        <button onClick={() => addToCart(product._id)}>Add to Cart</button>
        <Link to="/cart">View Cart</Link>
      </div>
    </div>
  );
}

export default ProductDetail;
