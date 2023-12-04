import React, { useState, useEffect } from 'react';
import './Searching2.css';

const Searching2 = ({ onSelectProduct, onRemoveProduct, clicked }) => {
  const [productsData, setProductsData] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Tải dữ liệu sản phẩm
    fetch('/json/Search1.json')
      .then(response => response.json())
      .then(data => setProductsData(data));
  }, []);
  console.log(productsData)
  useEffect(() => {
    if (searchTerm) {
      const searchTerms = searchTerm.toLowerCase().split(' ');
      let results = [];
      Object.keys(productsData).forEach(category => {
        const filteredProducts = productsData[category].filter(product =>
          searchTerms.every(term =>
            product.name.toLowerCase().includes(term) ||
            product.id.toLowerCase().includes(term)
          )
        );
        results = results.concat(filteredProducts);
      });
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm, productsData]);


  return (
    <div>
      <input
        type="text"
        className={`search-input ${clicked ? 'clicked' : ''}`}
        placeholder="SEARCH"
        value={searchTerm}
        style={{ textAlign: 'center' }}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
        <br />
        <div className="search-results-container">
          {searchResults.map(product => (
            <div key={product.id} className={`search-result ${clicked ? 'clicked' : ''}`}>
              <img src={product.image} alt={product.name} />
              <div className="search-result-info">
                <div className={`product-name ${clicked ? 'clicked' : ''}`}>{product.name}</div>
                <div className={`product-price2 ${clicked ? 'clicked' : ''}`}>{product.price}</div>
                <button onClick={() => onSelectProduct(product)}>Add to comparison</button>
                <button onClick={() => onRemoveProduct(product)}>Remove from comparison</button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Searching2;
