import React, { useState, useEffect } from 'react';
import './Searching.css';
import { useNavigate } from 'react-router-dom';

const Searching = ({ handleCloseModal, clicked }) => {
  const navigate = useNavigate();
  const [productsData, setProductsData] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const handleProductClick = (product) => {
    navigate(`${product.id}`)
    handleCloseModal()
  }

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
        className={`search-input ${clicked ? 'clicked' : ''}`}
        placeholder="SEARCH"
        value={searchTerm}
        style={{ textAlign: 'center' }}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
        <br />
        {searchResults.map(product => (
          <div key={product.id} className={`search-result ${clicked ? 'clicked' : ''}`} onClick={() => handleProductClick(product)}>
            <img src={product.image} alt={product.name} />
            <div className={`search-result-info ${clicked ? 'clicked' : ''}`}>
              <div className={`product-name ${clicked ? 'clicked' : ''}`}>{product.name}</div>
              <div className={`product-price2 ${clicked ? 'clicked' : ''}`}>{product.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Searching;