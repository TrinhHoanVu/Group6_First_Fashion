import React from 'react';
import ProductItem from './ProductItem'; // Đảm bảo đã tạo ProductItem component
import './ProductList.css'; // Tạo một file CSS riêng cho ProductList

function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductItem key={index} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
