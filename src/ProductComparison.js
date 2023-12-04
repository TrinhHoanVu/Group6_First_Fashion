import React, { useState, useEffect } from 'react';
import Searching2 from './Searching2'; // Đảm bảo import component Searching
import styles from './ProductComparison.module.css';


function ProductComparison({ clicked }) {
  const [products, setProducts] = useState({});
  const [selectedProducts, setSelectedProducts] = useState([]); // State để lưu trữ dữ liệu từ tệp JSON

  useEffect(() => {
    fetch('/json/search.json')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const handleProductSelect = (product) => {
    addProductToComparison(product);
  };

  const handleProductRemove = (product) => {
    removeProductFromComparison(product);
  };

  const addProductToComparison = (product) => {
    setSelectedProducts([...selectedProducts, product]);
  };

  const removeProductFromComparison = (product) => {
    const updatedProducts = selectedProducts.filter(p => p.id !== product.id);
    setSelectedProducts(updatedProducts);
  };

  const getProductCategory = (product) => {
    if (product.id.includes("Perfume")) return "perfume";
    if (product.id.includes("Shoes")) return "shoes";
    if (product.id.includes("Clothes")) return "clothes";
    return "other";
  };

  const hasSelectedProductsInCategory = (category) => {
    return selectedProducts.some(product => getProductCategory(product) === category);
  };

  return (
    <div className={`productComparisonContainer ${clicked ? 'clicked' : ''}`}>
      <Searching2 onSelectProduct={handleProductSelect} onRemoveProduct={handleProductRemove} clicked={clicked}/>
  
      <div className={styles.productcomparison}>
        {['perfume', 'shoes', 'clothes'].map(category => (
          hasSelectedProductsInCategory(category) && (
            <div key={category} className={styles.categorySection}>
              <h2>{category.toUpperCase()}</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {selectedProducts.filter(p => getProductCategory(p) === category).map(product => (
                  <div key={product.id} className={styles.productDetails}>
                    <h3>{product.name}</h3>
                    <img className={styles.productImage} src={product.image} alt={product.name} />

                    <div className={styles.productinfo}>

                      {category === 'perfume' && (
                        <>
                          <p>Fragrance: {product.scent}</p>
                          <p>Longevity: {product.longevity}</p>
                          <p>Price Range: {product.price_range}</p>
                        </>
                      )}
                      {category === 'shoes' && (
                        <>
                          <p>Style: {product.style}</p>
                          <p>Material: {product.material}</p>
                          <p>Size: {product.size}</p>
                        </>
                      )}
                      {category === 'clothes' && (
                        <>
                          <p>Style: {product.style}</p>
                          <p>Material: {product.material}</p>
                          <p>Size: {product.size}</p>
                          <p>Season: {product.weather}</p>
                          <p>Special Feature: {product.special_feature}</p>
                        </>
                      )}
                      <p>Price: {product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )))}
      </div>
    </div>
  );
}

export default ProductComparison;
