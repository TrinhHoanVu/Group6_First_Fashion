import './Bill.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { MdCheckCircle } from "react-icons/md";


function Bill({ clicked, clearCartItems }) {
    const navigate = useNavigate();
    const [openModals, setOpenModals] = useState(false);
    const handleModal = () => {
        setOpenModals(true)
    }
    const handleCloseModal = () => {
        setOpenModals(false);
        clearCartItems();
        navigate('/');
    }
    const formik = useFormik({
        initialValues: {
            cardnumber: '',
            securitycode: '',
            termsAccepted: false
        },
        onSubmit: (values, { setSubmitting }) => {
            if (formik.isValid) {
                handleModal();
                
            }
            setSubmitting(false);
        },
        validationSchema: Yup.object().shape({
            cardnumber: Yup.number().required('Required'),
            securitycode: Yup.number().required('Required'),
            termsAccepted: Yup.bool().oneOf([true], 'You must accept the terms and conditions.')
        })
    });
    return (
        <div>
            <div className={`bill-table ${clicked ? 'clicked' : ''}`}>
                <form onSubmit={formik.handleSubmit}>
                    <span className={`bill-form-title ${clicked ? 'clicked' : ''}`}>Choose your card:</span> <br /> <br />
                    <select name='titles'
                        value={formik.values.selectedCategory}
                        onChange={formik.handleChange}
                        className={`bill-form-card ${clicked ? 'clicked' : ''}`}
                    >
                        <option value="Visa">Visa</option>
                        <option value="JCB Debit">JCB Debit</option>
                        <option value="MasterCard">MasterCard</option>
                    </select>
                    <br /> <br /><br />
                    <span className={`bill-form-title ${clicked ? 'clicked' : ''}`}>Card number:</span> <br /> <br />
                    <input type="text" className={`bill-form-card-number ${clicked ? 'clicked' : ''}`}
                        name='cardnumber' placeholder='Card number' onChange={formik.handleChange} /> <br /><br /><br />
                    <span className={`bill-form-title ${clicked ? 'clicked' : ''}`}>Expiration</span> <br /> <br />
                    <select name='titles'
                        value={formik.values.selectedCategory}
                        onChange={formik.handleChange}
                        className={`bill-form-month ${clicked ? 'clicked' : ''}`}
                    >
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                    </select>
                    <select name='titles'
                        value={formik.values.selectedCategory}
                        onChange={formik.handleChange}
                        className={`bill-form-year ${clicked ? 'clicked' : ''}`}
                    >
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                        <option value="2028">2028</option>
                        <option value="2029">2029</option>
                        <option value="2030">2030</option>
                        <option value="2031">2031</option>
                        <option value="2032">2032</option>
                        <option value="2033">2033</option>
                    </select>
                    <br /><br /><br />
                    <span className={`bill-form-title ${clicked ? 'clicked' : ''}`}>Security code</span> <br /> <br />
                    <input type="text" className={`bill-form-card-securitycode ${clicked ? 'clicked' : ''}`}
                        name='securitycode' placeholder='Security Code' onChange={formik.handleChange} />
                    <br /><br /><br />
                    <span>Please review your order summary before placing your order</span> <br /><br />
                    <input type="checkbox"
                        name="termsAccepted"
                        checked={formik.values.termsAccepted}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} /> I agree to the term & conditions
                    {formik.errors.termsAccepted && formik.touched.termsAccepted && (
                        <div className='text-danger'>{formik.errors.termsAccepted}</div>
                    )}
                    <br /><br />
                    <button type='submit' className={`bill-submitbutton ${clicked ? 'clicked' : ''}`} disabled={!formik.values.termsAccepted}>PLACE ORDER</button>
                </form>
            </div>
            <Modal open={openModals} onClose={handleCloseModal}>
                <Box className={`payment-alert`}>
                    <br /><br />
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <MdCheckCircle style={{ fontSize: '400%' }} />
                        <span>SUCCESSFUL PAYMENT</span>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}

export default Bill;