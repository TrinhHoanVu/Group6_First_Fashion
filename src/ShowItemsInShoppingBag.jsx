
import './ShowItemsInShoppingBag.css';
import React, { useState } from 'react';


function ShowItemsInShoppingBag({ cartItems, onRemove, onUpdateCartQuantity, item, clicked }) {
  const [quantityItems, setQuantityItems] = useState(1);

  return (
    <div style={{ clear: 'left' }} className='shoppingbag'>
      <table className={`table-shoppingbag ${clicked ? 'clicked' : ''}`}>
        <tr>
          <td className='img-div'>
            <img src={cartItems.image} alt={cartItems.id} className='image' />
          </td>
          <td className='name-div'>
            <span className='name-product'>{cartItems.name}</span> <br />
            <span className='removebutton-on-shoppingbag' onClick={() => {
              console.log("Item to remove:", item);
              onRemove(item);
            }}>
              Remove
            </span>
          </td>
          <td className='quantity-box'>
            <span className={`quantity-name-qty ${clicked ? 'clicked' : ''}`}>QTY</span>{' '}
            <select
              name="quantity"
              className={`quantity-select-box ${clicked ? 'clicked' : ''}`}
              id="quantity"
              value={cartItems.quantity}
              onChange={(e) => {
                setQuantityItems(parseFloat(e.target.value));
                onUpdateCartQuantity(cartItems.id, parseFloat(e.target.value));
              }}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            {' '}
            <br />
          </td>
          <td>
            <strong className='price'>${cartItems.price * quantityItems}</strong>
          </td>
        </tr>
      </table>
      <table className='total-price'></table>
      <br /><br /><br />
    </div>
  );
}

export default ShowItemsInShoppingBag;
