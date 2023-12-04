import React, { useState, useEffect } from 'react';
import Searching from './Searching'; // Đảm bảo import component Searching
import styles from './ProductComparison.module.css';


function ProductComparison() {
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
    <div className={styles.productComparison} style={{backgroundColor:'white'}}>
      <Searching onSelectProduct={handleProductSelect} onRemoveProduct={handleProductRemove} />
      <h2 className={styles.title}>Products have been selected for comparison</h2>
      <div className={styles.productcomparison}>
        {['perfume', 'shoes', 'clothes'].map(category => (
          hasSelectedProductsInCategory(category) && (
          <div key={category} className={styles.categorysection}>
            <h2>{category.toUpperCase()}</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}> 
              {selectedProducts.filter(p => getProductCategory(p) === category).map(product => (
                <div key={product.id} className={styles.productdetails}>
                  <h3>{product.name}</h3>
                  <img src={product.image} alt={product.name} width="100" height="100" />
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
