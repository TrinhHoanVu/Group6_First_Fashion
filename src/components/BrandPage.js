// File: components/BrandPage.js

import React from 'react';
import { useParams } from 'react-router-dom';
import ProductItem from './ProductItem';

const BrandPage = ({ products }) => {
  const { brandName } = useParams();
  const brandProducts = products[brandName.toLowerCase()] || [];

  return (
    <div>
      <h1>{brandName}</h1>
      <div className="brand-products-list">
        {brandProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BrandPage;
