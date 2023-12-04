import { useParams } from 'react-router-dom';
import './ProductDetail.css'
import React, { useState, useEffect } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { PiDownloadSimple } from "react-icons/pi";


function ProductDetail({ onAdd, clicked }) {
   
    const id = useParams({});
    const [item, setItem] = useState({});
    useEffect(() => {
        fetch(`https://65420df4f0b8287df1ff68de.mockapi.io/firstfashion/${id.id}`)
            .then((data) => data.json())
            .then((usr) => setItem(usr))
    }, [id]);

    const itemNameInUpperCase = item.name ? item.name.toUpperCase() : '';

    const handleAddToBag = () => {
        onAdd(item);
    };
    const [arrowCall, setArrowCall] = useState(false);
    const [openDeliveryReturn, setOpenDeliveryReturn] = useState(false);
    const handleOpenDeliveryReturn = () => {
        setOpenDeliveryReturn(!openDeliveryReturn);
        setArrowCall(!arrowCall)
    }

    const downloadFileAtURL = (url) => {
        const fileName = url.split('/').pop();
        const aTag = document.createElement('a');
        aTag.href = url;
        aTag.setAttribute('download', fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }
    console.log(id)
    return (
        <div>
            <table className={`productdetail-table-item  ${clicked ? 'clicked' : ''}`}>
                <tr>
                    <td style={{ width: '50%', height: '50%', overflow: 'hidden' }}>
                        <img src={item.image} alt={item.name} className={`productdetail-img`} />
                    </td>
                    <td className={`productdetail-name`}>
                        <div style={{ width: '70%', textAlign: 'left' }}>
                            <span style={{ fontSize: '150%' }}>{itemNameInUpperCase}</span>
                            <hr className={`productdetail-hr ${clicked ? 'clicked' : ''}`} />
                            <span style={{ fontSize: '100%', fontFamily: 'lato-regular' }}>Ref. {item.id}</span> <br /> <br />
                            <span style={{ fontSize: '150%' }}>${item.price}</span>
                            <hr className={`productdetail-hr2 ${clicked ? 'clicked' : ''}`} />
                            <button className="download" onClick={() => { downloadFileAtURL(`./${item.id}.docx`) }}><PiDownloadSimple /> Download description</button> <br /><br />
                            <button className={`productdetail-button-addtobag ${clicked ? 'clicked' : ''}`} onClick={handleAddToBag}>ADD TO BAG</button>
                        </div>
                    </td>
                </tr>
            </table>
            <br /><br /><br /><br />
            <div className={`product-information-table2 ${clicked ? 'clicked' : ''}`}>

                <div className={`productdetail-informtaion-title  ${clicked ? 'clicked' : ''}`}>
                    <br /><br /><br />
                    <div>
                    </div>
                    <div>
                        <div className={`productdetail-delivery-title`} onClick={handleOpenDeliveryReturn}>
                            <span>DELIVERY & RETURNS</span>
                            {arrowCall ? <span style={{ marginLeft: 'auto' }}><IoIosArrowUp /></span> :
                                <span style={{ marginLeft: 'auto' }}><IoIosArrowDown /></span>}
                        </div>
                        <br />
                        {openDeliveryReturn && (<div className={`productdetail-deliveryandreturn`}>
                            <span className='asd' style={{ fontFamily: 'lato-bold' }}>WHAT ARE MY DELIVERY OPTIONS?</span> <br /> <br />
                            All orders placed on the Official Online Boutique are uniquely packaged by FIRST FASHION and delivered in Singapore. FIRST FASHION is pleased to offer complimentary standard delivery for all orders.
                            FIRST FASHION offers the following delivery option: Standard Delivery. <br /> <br />
                            Please note, Standard delivery is between 2-4 working days, and all deliveries are contact free. <br /> <br />
                            <span style={{ fontFamily: 'lato-bold' }}>WHAT ARE YOUR RETURN / EXCHANGE POLICIES ?</span><br /> <br />
                            You can return all or part of your FIRST FASHION online boutique order within 14 calendar days from the date of order delivery, provided products are in original packaging with packing list and original receipt. For hygiene and safety reasons, products that have been unsealed or used are generally not eligible for return. For certain products, it may not be possible to determine if the product has been used (for example, the product may not be sold sealed or in any package). Such products may also not be eligible for return.
                            All returns remain at FIRST FASHION's sole discretion. <br /><br />
                            Please note that returns will not be accepted at any other retail outlet that sells FIRST FASHION products. <br /><br />
                            All refunds will be credited to the original card/method that was used for payment, and refund processing time may vary depending on your bank. Please note, FIRST FASHION online boutique orders cannot be exchanged, but you may, subject to these terms and conditions, return an order to receive a refund. <br /><br />
                            Please contact our Client Care Representative Online or call 800 321 1500, Mon to Fri excluding Public Holidays, 1000-1900 and we will arrange for our carrier to collect the products from you. <br /> <br />
                        </div>)}
                    </div>
                </div>
            </div>
            <br /><br /><br /><br /><br />
        </div>
    );
}

export default ProductDetail;
