import React from 'react';
import './BrandButton.css'; // Tạo một file CSS riêng cho BrandButton

function BrandButton({ brandName, onClick, clicked }) {
  return (
    <button className={`brand-button ${clicked ? 'clicked' : ''}`} onClick={onClick}>
      {brandName}
    </button>
  );
}

export default BrandButton;
