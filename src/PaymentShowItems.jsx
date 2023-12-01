import './PaymentShowItems.css'

function PaymentShowItems({ cartItems, qty }) {
    return (
        <div>
            <hr />
            <div>
                <table className='table-payment' style={{borderCollapse:'collapse'}}>
                    <td className='img-div-payment'>
                        <img src={cartItems.image} alt={cartItems.id} className='image2' />
                    </td>
                    <td className='name-div-payment'>
                        <strong className='payment-name-product'>{cartItems.name}</strong> <br />
                        <span className='payment-quantity2'>QTY {qty}</span>  <br />
                        <strong className='payment-price'>${cartItems.price}</strong>
                    </td>

                </table>
            </div>
        </div>
    );
}

export default PaymentShowItems;