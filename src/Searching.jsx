import React, { useState, useEffect } from 'react';
import './Searching.css';

const Searching = () => {
  const [productsData, setProductsData] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Tải dữ liệu sản phẩm
    fetch('/json/search.json')
      .then(response => response.json())
      .then(data => setProductsData(data));
  }, []);

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
        className="search-input"
        placeholder="SEARCH" 
        value={searchTerm}
        style={{textAlign:'center'}}
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <div>
        <br />
        {searchResults.map(product => (
          <div key={product.id} className="search-result">
            <img src={product.image} alt={product.name} />
            <div className="search-result-info">
              <div className="product-name">{product.name}</div>
              <div className="product-price2">{product.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Searching;