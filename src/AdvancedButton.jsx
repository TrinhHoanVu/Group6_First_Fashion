import React from 'react';
import './Searching.css'
import { IoIosSearch } from 'react-icons/io';
import { IoPersonOutline } from 'react-icons/io5';
import { PiShoppingCart } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Searching from './Searching';
import { IoIosGitCompare } from "react-icons/io";
import ProductComparison from './ProductComparison'




function AdvancedButton({ clicked, showLoginForm, onAccountClick, countCartItems }) {
  const navigate = useNavigate();

  const handleAccountClick = () => {
    navigate('/account');
    onAccountClick();
  };
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModel = () => {
    setOpenModal(true)
  }
  const handleCloseModel = () => {
    setOpenModal(false)
  }
  const [openComparisonModal, setOpenComparisonModal] = useState(false);
  const handleOpenComparisonModal = () => {
    setOpenComparisonModal(true)
  }
  const handleCloseComparisonModal = () => {
    setOpenComparisonModal(false)
  }


  return (
    <div className={`home-advanced-button ${clicked ? 'clicked' : ''}`}>
      <IoIosSearch className={`home-advanced-detail-button ${clicked ? 'clicked' : ''}`}
        onClick={handleOpenModel}
      />
      <Modal open={openModal} onClose={handleCloseModel}>
        <Box className={`searching-box ${clicked ? 'clicked' : ''}`}>
          <div className={`searching-box-close-button ${clicked ? 'clicked' : ''}`} onClick={handleCloseModel}>Close</div>
          <Searching handleCloseModal={handleCloseModel} clicked={clicked} />
        </Box>
      </Modal>

      <IoIosGitCompare className={`home-advanced-detail-button ${clicked ? 'clicked' : ''}`} onClick={handleOpenComparisonModal} />
      <Modal open={openComparisonModal} onClose={handleCloseComparisonModal}>
        <Box className={`searching-box ${clicked ? 'clicked' : ''}`}>
          <div className={`searching-box-close-button ${clicked ? 'clicked' : ''}`} onClick={handleCloseComparisonModal}>Close</div>
          <ProductComparison clicked={clicked} />
        </Box>
      </Modal>

      <IoPersonOutline className={`home-advanced-detail-button ${clicked ? 'clicked' : ''}`}
        onClick={handleAccountClick} />


      <PiShoppingCart className={`home-advanced-detail-button ${clicked ? 'clicked' : ''}`}
        style={{ fontSize: '125%' }}
        onClick={() => navigate('/cart')}
      />

    </div>
  );
}

export default AdvancedButton;
