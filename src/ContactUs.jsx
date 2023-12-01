import './ContactUs.css'
import { FaDiamond } from "react-icons/fa6";
import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { MdCheckCircle } from "react-icons/md";

function ContactUs(clicked) {
    const phoneNumber = '368.123.456';

    const handleCallClick = () => {
        window.location.href = `tel:${phoneNumber}`;
    };
    const [openModal, setOpenModal] = useState(false);
    const handleOpenModel = () => {
        setOpenModal(true)

    }
    const handleCloseModel = () => {
        setOpenModal(false)
    }

    const [openChildModal, setOpenChildModal] = useState(false);
    const handleOpenChildModal = () => {
        setOpenChildModal(true);
    }
    const handleCloseChildModal = () => {
        setOpenChildModal(false);
        setOpenModal(false)
    }
    const formik = useFormik({
        initialValues: {
            titles: '',
            firstname: '',
            lastname: '',
            phonelocation: '',
            subject: '',
            comments: '',

        },
        onSubmit: values => {
            if (formik.isValid) {
                handleOpenChildModal()
            }
        },
        validationSchema: Yup.object().shape({
            firstname: Yup.string().min(3, 'Too short').required('Required'),
            lastname: Yup.string().min(3, 'Too short').required('Required'),
            comments: Yup.string().max(400, 'Too Long')
        })
    });

    return (
        <div className={`contactus-div  ${clicked ? 'clicked' : ''}`}>
            <br />
            <h1 className={`contactus-title ${clicked ? 'clicked' : ''}`}>CONTACT US</h1>
            <br /><br />
            <div className={`contactus-detail ${clicked ? 'clicked' : ''}`}>
                <span className={`contactus-small-title ${clicked ? 'clicked' : ''}`}>
                    Enquiries about First Fashion website or online purchases
                </span>
                <br /> <br />
                <hr className={`contactus-hr ${clicked ? 'clicked' : ''}`} />
                <br />
                <div className={`contactus-phone ${clicked ? 'clicked' : ''}`}>
                    PHONE <br />
                    Our Client Advisors are available Monday through Sunday from 8AM to 8PM
                    <button className={`contactus-phone-button ${clicked ? 'clicked' : ''}`} onClick={handleCallClick} style={{ cursor: 'pointer' }}>
                        CALL US AT <br /> +84 {phoneNumber}
                    </button>
                </div>
                <br />
                <hr className={`contactus-hr ${clicked ? 'clicked' : ''}`} />
                <br />
                <div className={`contactus-livechat ${clicked ? 'clicked' : ''}`}>
                    LIVE CHAT <br />
                    Chat with our Online Client Advisors Monday through Sunday from 8am - 8pm, excluding holidays.
                </div>
                <br />
                <hr className={`contactus-hr ${clicked ? 'clicked' : ''}`} />
                <br />
                <div className={`contactus-venue ${clicked ? 'clicked' : ''}`}>
                    ADDRESS <br />
                    <FaDiamond style={{ height: '10px' }} className={`contactus-diamond-dot  ${clicked ? 'clicked' : ''}`} />590 Cach Mang Thang 8, Ward 11, 3 District,
                    Ho Chi Minh City <br />
                    <FaDiamond style={{ height: '10px' }} className={`contactus-diamond-dot  ${clicked ? 'clicked' : ''}`} />M09 - L12, Duong Noi New Urban Area, La Khe,
                    Ha Dong District, Ha Noi
                </div>
                <br />
                <hr className={`contactus-hr ${clicked ? 'clicked' : ''}`} />
                <br />
                <div className={`contactus-email ${clicked ? 'clicked' : ''}`}>
                    EMAIL <br />
                    To reach our Online Client Advisors by email, click "email us" to provide details and your contact <br />information:
                    <button type='button'
                        className={`contactus-email-button ${clicked ? 'clicked' : ''}`}
                        onClick={handleOpenModel}
                        style={{ cursor: 'pointer' }}
                    >EMAIL US</button>

                    <Modal open={openModal}
                        onClose={handleCloseModel}
                    >
                        <Box className={`contactus-email-box ${clicked ? 'clicked' : ''}`}>
                            <form className={`contactus-email-form`} onSubmit={formik.handleSubmit} style={{ fontFamily: 'lato-regular' }}>
                                <div className={`contactus-email-titles`}>EMAIL US</div>
                                <h4 className={`contactus-emailbox-titles  ${clicked ? 'clicked' : ''}`}>Titles</h4>
                                <select name='titles'
                                    value={formik.values.selectedCategory}
                                    onChange={formik.handleChange}
                                    className={`contactus-emailbox-select-titles ${clicked ? 'clicked' : ''}`}
                                    required
                                >
                                    <option value="">Titles</option>
                                    <option value="Mr.">Mrs.</option>
                                    <option value="Ms.">Ms.</option>
                                    <option value="Mr.">Mr.</option>
                                    <option value="Miss">Miss</option>
                                    <option value="Mx.">Mx.</option>
                                    <option value="Dr.">Dr.</option>
                                    <option value="Prefer not to say">Prefer not to say</option>
                                </select>
                                <h4 className={`contactus-emailbox-titles ${clicked ? 'clicked' : ''}`} style={{ fontFamily: 'lato-regular' }}>First Name</h4>
                                <input type="text" className={`contactus-emailbox-box ${clicked ? 'clicked' : ''}`} name='firstname' onChange={formik.handleChange}
                                    placeholder='First Name'
                                />
                                <h4 className={`contactus-emailbox-titles  ${clicked ? 'clicked' : ''}`}>Last Name</h4>
                                <input type="text" className={`contactus-emailbox-box ${clicked ? 'clicked' : ''}`} name='lastname' onChange={formik.handleChange}
                                    placeholder='Last Name'
                                />

                                <h4 className={`contactus-emailbox-titles  ${clicked ? 'clicked' : ''}`}>Phone Number optional</h4>
                                <select name='phonelocation'
                                    value={formik.values.selectedCategory}
                                    onChange={formik.handleChange}
                                    className={`contactus-emailbox-select-titles ${clicked ? 'clicked' : ''}`}
                                    required
                                >
                                    <option value="+374 Unites States" defaultValue={'+374 Unites States'}>+374 Unites States</option>
                                    <option value="+84 Vietname">+84 Vietname</option>
                                </select>
                                <input type="text" className={`contactus-emailbox-phoneuser`} name='phone' style={{ textAlign: 'left' }} />
                                <h4 className={`contactus-emailbox-titles ${clicked ? 'clicked' : ''}`}>Please Select Subject</h4>

                                <select name='subject'
                                    value={formik.values.selectedCategory}
                                    onChange={formik.handleChange}
                                    className={`contactus-emailbox-select-titles ${clicked ? 'clicked' : ''}`}
                                    required
                                >
                                    <option value="">Select</option>
                                    <option value="Product Information">Product Information</option>
                                    <option value="After-Purchase Service">After-Purchase Service</option>
                                    <option value="OrderStatus">OrderStatus</option>
                                    <option value="My First Fasion Account">My First Fasion Account</option>
                                    <option value="Other">Other</option>
                                </select>
                                <h4 className={`contactus-emailbox-titles  ${clicked ? 'clicked' : ''}`}>Please enter a valid inquiry or comment</h4>
                                <textarea name="comments" id="" cols="44" rows="5" className={`contactus-emailbox-comments-area`} onChange={formik.handleChange}></textarea>
                                <br /> <br />
                                <button type='submit' style={{ cursor: 'pointer' }} className={`contactus-emailbox-submit-button`}>Send Email</button>
                            </form>
                            <Modal open={openChildModal} onClose={() => handleCloseChildModal()}>
                                <Box className={`contactus-emailus-alert`}>
                                    <br /><br />
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <MdCheckCircle style={{ fontSize: '400%' }} />
                                        <span>WE'VE RECEIVED YOUR FEEDBACK. <br /> WE WILL CONTACT YOU SOON!</span>
                                    </div>
                                </Box>
                            </Modal>
                        </Box>
                    </Modal>

                </div>
            </div>
            <br /><br /><br /><br /><br />
        </div>
    );
}

export default ContactUs;