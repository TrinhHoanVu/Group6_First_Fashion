import React, { useEffect, useState } from 'react';
import './ShoppingBag.css';
import ShowItemsInShoppingBag from './ShowItemsInShoppingBag';
import Empty from './Empty';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";

function ShoppingBag({ cartItems, onUpdateCartQuantity, onRemove, setGiftMessageOnServer, clicked }) {
  const navigate = useNavigate();
  const isEmpty = cartItems.length === 0;
  const [totalPrice, setTotalPrice] = useState(0);
  const shippingPrice = totalPrice > 2000 ? 0 : 20;
  const [showWritingMessage, setShowWritingMessage] = useState(false);
  const handleWrittingMessageOpen = () => {
    setShowWritingMessage(true)
  }
  const handleWrittingMessageClose = () => {
    setShowWritingMessage(false)
  }
  // Calculate total price when cartItems change
  useEffect(() => {
    const newTotalPrice = cartItems.reduce((sum, item) => sum + parseFloat(item.price) * item.qty, 0);
    setTotalPrice(newTotalPrice);
  }, [cartItems]);


  const handleGiftMessage = (e) => {
    setGiftMessageOnServer(e.target.value);
  }


  return (
    <div className={`shoppingbag-background ${clicked ? 'clicked' : ''}`}>
      <br />
      <div className="shoppingbag-div">
        <p>
          <span className={`shoppingbag-title ${clicked ? 'clicked' : ''}`}>SHOPPING BAG</span> <br />
          <span className='shoppingbag-text'>FIRST FASHION presents each purchase in signature packaging.</span>
        </p> <br />
        {isEmpty ? <Empty /> : (
          <>
            {cartItems.map((item) =>
              <ShowItemsInShoppingBag cartItems={item} key={item.id} onUpdateCartQuantity={onUpdateCartQuantity} onRemove={onRemove}
                item={cartItems.find((x) => x.id === item.id)} />
            )}
            <br /><br />
            <table className={`shoppingbag-table-totalprice ${clicked ? 'clicked' : ''}`} style={{ borderCollapse: 'collapse' }}>
              <tr>
                <td className={`shoppingbag-pricename  ${clicked ? 'clicked' : ''}`}>
                  Subtotal
                </td>
                <td className={`shoppingbag-pricevalue ${clicked ? 'clicked' : ''}`}>
                  <strong>${totalPrice}</strong>
                </td>
              </tr>
              <tr>
                <td className={`shoppingbag-pricename ${clicked ? 'clicked' : ''}`}>Taxes</td>
                <td className={`shoppingbag-pricevalue ${clicked ? 'clicked' : ''}`}><strong>${totalPrice * 0.1}</strong></td>
              </tr>
              <tr>
                <td className={`shoppingbag-pricename ${clicked ? 'clicked' : ''}`}>Delivery method</td>
                <td className={`shoppingbag-pricevalue ${clicked ? 'clicked' : ''}`}><strong>${shippingPrice}</strong></td>
              </tr>
              <tr>
                <td className={`shoppingbag-pricename2 ${clicked ? 'clicked' : ''}`}><strong>TOTAL</strong></td>
                <td className={`shoppingbag-pricevalue ${clicked ? 'clicked' : ''}`}><strong>${totalPrice + totalPrice * 0.1 + shippingPrice}</strong></td>
              </tr>
            </table>
            <br /><br />
            <div className='shoppingbag-gift-checkout'>
              <span className='shoppingbag-gift-text'>GIFT MESSAGE</span>
              <hr style={{ color: 'black' }} />
              <span className='shoppingbag-detail-gift'>
                Personalize your gift with a special message. Choose to receive a blank or printed card to include with your gift.
              </span> <br /><br />
              <input type="radio" name='gift' value='' onChange={handleGiftMessage} onClick={handleWrittingMessageClose} />Do not include a card <br /><br />
              <input type="radio" name='gift' value='Blank card' onChange={handleGiftMessage} onClick={handleWrittingMessageClose} />Send me a blank card <br /><br />
              <input type="radio" name='gift' value='Write a gift message' onChange={handleGiftMessage} onClick={handleWrittingMessageOpen} />Write a gift message <br /> <br />
              {showWritingMessage && (
                <div style={{ margin: '0 auto', width: '90%', textAlign: 'left' }} className={`giftmessage-div ${clicked ? 'clicked' : ''}`}>
                  <span style={{ fontFamily: 'lato-bold', fontSize: '90%' }}>PLEASE NOTE</span> <br />
                  <span style={{ fontFamily: 'lato-regular', fontSize: '90%' }}>Only English language characters are accepted. Use of any other characters may not be printed correctly.
                    Maximum 180 characters</span><br />
                  <form>
                    <input type="text" placeholder='Enter your message here' className={`shoppingbag-message-text ${clicked ? 'clicked' : ''}`}
                      onChange={(e) => setGiftMessageOnServer(e.target.value)} /> <br />
                    <input type="reset" value='Clear' className='shoppingbag-message-clear-button' />
                  </form>
                </div>
              )}
              <br /><br /><br />
              <div className={`shoppingbag-checkout-button ${clicked ? 'clicked' : ''}`} style={{ cursor: 'pointer' }} onClick={() => navigate('/payment')}>
                CONTINUE TO CHECKOUT
              </div> <br /><br />
              <div className='shoppingbag-continuetoshopping-button'>
                <span style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>CONTINUE TO SHOPPING</span><span style={{ cursor: 'pointer' }} onClick={() => navigate('/')}><IoIosArrowForward /></span>
              </div>


            </div>
          </>
        )}


        <br /><br /><br /><br /><br />
      </div>
    </div>
  );
}

export default ShoppingBag;
