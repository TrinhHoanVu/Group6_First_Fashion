// ProductItem.js
import React from 'react';
import './ProductItem.css';
import { useNavigate } from 'react-router-dom'

function ProductItem({ product, clicked, onAdd }) {
  const navigate = useNavigate();
  return (
    <div className="product-item">
      <div className='banner'></div>
      <img src={product.image} alt={product.name} onClick={()=> navigate(`/${product.id}`) } />
      <h3 className={`product-name  ${clicked ? 'clicked' : ''}`}>{product.name}</h3>
      <p className={`product-price ${clicked ? 'clicked' : ''}`}>${product.price}</p> {/* Giá tiền */}
      <button onClick={onAdd} style={{cursor:'pointer'}} className={`productitem-addtochart-button ${clicked ? 'clicked' : ''}`}>ADD TO BAG</button>
    </div>
  );
}

export default ProductItem;
