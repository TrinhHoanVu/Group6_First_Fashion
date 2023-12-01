import React, { useState, useEffect } from 'react';
import PaymentShowItems from './PaymentShowItems';
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import DeliveryMethod from './DeliveryMethod';
import Bill from './Bill'
import './Payment.css'
import { FaCcJcb } from "react-icons/fa6";
import { FaCcMastercard } from "react-icons/fa6";
import { FaCcVisa } from "react-icons/fa6";



function Payment({ cartItems, clicked, giftMessage }) {
    const navigate = useNavigate();
    const [totalPrice, setTotalPrice] = useState(0);
    const shippingPrice = totalPrice > 2000 ? 0 : 20;
    useEffect(() => {
        const newTotalPrice = cartItems.reduce((sum, item) => sum + parseFloat(item.price) * item.qty, 0);
        setTotalPrice(newTotalPrice);
    }, [cartItems]);

    const [openBill, setOpenBill] = useState(false);

    const onSetOpenBill = () => {
        setOpenBill(true);

    }

    console.log(giftMessage)

    return (
        <div className={`payment-table-all2`}>
            <h1 className={`contactus-title ${clicked ? 'clicked' : ''}`}>PAYMENT</h1> <br />
            <div className='payment-table-all'>
                <div style={{ width: '60%' }}>
                    <div style={{ textAlign: 'left', width: '80%', margin: '0 auto' }}>
                        <div style={{ display: 'flex' }}>
                            <span className={`delieverymethod-title  ${clicked ? 'clicked' : ''}`}>1. DELIVERY METHOD</span>
                        </div>
                        <hr className={`delivery-hr`} /> <br />
                    </div>
                    {<DeliveryMethod onSetOpenBill={onSetOpenBill} />}
                    <br /> <br />
                    <div style={{ textAlign: 'left', width: '80%', margin: '0 auto' }}>
                        <div style={{ display: 'flex' }}>
                            <span className={`delieverymethod-title  ${clicked ? 'clicked' : ''}`}>2. BILL</span>

                        </div>
                        <hr className={`delivery-hr`} /> <br />
                    </div>
                    {openBill && <Bill />}
                </div>
                <div style={{ width: '30%', fontFamily: 'lato-regular' }} className={`payment-ordersummary-table ${clicked ? 'clicked' : ''}`}>
                    <div style={{ display: 'flex' }}>
                        <span style={{ marginRight: 'auto', fontFamily: 'lato-bold' }}>ORDER SUMMARY</span>
                        <span style={{ textAlign: 'right', cursor: 'pointer' }} onClick={() => navigate('/cart')}>Edit<IoIosArrowForward /></span>
                    </div>
                    {cartItems.map((item) =>
                        <PaymentShowItems cartItems={item} key={item.id} qty={item.qty} />
                    )}
                    <br /><br /><br />
                    <table className={`shoppingbag-table-totalprice2 ${clicked ? 'clicked' : ''}`} style={{ borderCollapse: 'collapse' }}>
                        <tr>
                            <td className='shoppingbag-pricename'>
                                Subtotal
                            </td>
                            <td className='shoppingbag-pricevalue'>
                                <strong>${totalPrice}</strong>
                            </td>
                        </tr>
                        <tr>
                            <td className='shoppingbag-pricename'>Taxes</td>
                            <td className='shoppingbag-pricevalue'><strong>${totalPrice * 0.1}</strong></td>
                        </tr>
                        <tr>
                            <td className='shoppingbag-pricename'>Delivery method</td>
                            <td className='shoppingbag-pricevalue'><strong>${shippingPrice}</strong></td>
                        </tr>
                        <tr>
                            <td className='shoppingbag-pricename2'><strong>TOTAL</strong></td>
                            <td className='shoppingbag-pricevalue'><strong>${totalPrice + totalPrice * 0.1 + shippingPrice}</strong></td>
                        </tr>
                    </table>
                    <br /><br />
                    {giftMessage && (
                        <div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <span style={{ marginRight: 'auto', fontFamily: 'lato-bold' }}>GIFT MESSAGE</span>
                                <hr style={{ border: '1px solid white', width: '100%' }} /> <br />
                                <span className={`payment-giftmessage`}>{giftMessage}</span>
                            </div>
                        </div>
                    )}
                </div>

            </div>
            <br /><br /><br />
            <div className={`payment-methods ${clicked ? 'clicked' : ''}`}>
                <span className='payment-methods-title'>PAYMENT METHODS</span> <br /> <br />
                <div className={`payment-methods-card`}>
                    <FaCcJcb />
                    <FaCcMastercard />
                    <FaCcVisa />
                </div>
                <br /><br />
                <span className={`payment-methods-secure`}>SECURE PAYMENT</span> <br /> <br />
                <span>Your credit card details are safe with us. <br />
                    All the information is protected using Secure Sockets Layer (SSL) technology.</span>
            </div>
            <br /><br /><br /><br /><br />
        </div>
    );
}

export default Payment;