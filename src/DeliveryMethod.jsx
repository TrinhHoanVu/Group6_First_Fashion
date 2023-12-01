import './DeliveryMethod.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';



function DeliveryMethod({ clicked, onSetOpenBill }) {

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            venue: '',
            detail: ''
        },
        onSubmit: (values, { setSubmitting }) => {
            if (formik.isValid) {
                onSetOpenBill();
            }
            setSubmitting(false);
        },
        validationSchema: Yup.object().shape({
            firstname: Yup.string().required('Required'),
            lastname: Yup.string().required('Required'),
            venue: Yup.string().required('Required')
        })
    });

    return (
        <div className={`delivery-table`}>
            <form onSubmit={formik.handleSubmit}>
                <div style={{ width: '100%' }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{ width: '47%' }}>
                            <span className={`deliverymethod-firstname ${clicked ? 'clicked' : ''}`}>First name</span> <br /> <br />
                            <input type="text" name='firstname' placeholder='Enter your first name'
                                className={`deliverymethod-firstname-input ${clicked ? 'clicked' : ''}`}
                                onChange={formik.handleChange}
                            />
                            {formik.errors.firstname && formik.touched.firstname ? (<div className='text-danger'>{formik.errors.firstname}</div>) : null}
                        </div>
                        <div style={{ width: '50%', marginLeft: 'auto' }}>
                            <span className={`deliverymethod-lastname ${clicked ? 'clicked' : ''}`}>Last name</span> <br /> <br />
                            <input type="text" name='lastname' placeholder='Enter your last name'
                                className={`deliverymethod-lastname-input ${clicked ? 'clicked' : ''}`}
                                onChange={formik.handleChange}
                            />
                            {formik.errors.lastname && formik.touched.lastname ? (<div className='text-danger'>{formik.errors.lastname}</div>) : null}
                        </div>
                    </div>
                    <br />
                    <div>
                        <span className={`deliverymethod-venue`}>Address</span> <br /><br />
                        <input type="text" name='venue' placeholder='Enter your last name'
                            className={`deliverymethod-venue-input ${clicked ? 'clicked' : ''}`}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.venue && formik.touched.venue ? (<div className='text-danger'>{formik.errors.venue}</div>) : null}

                    </div>
                    <br />
                    <div>
                        <span className={`deliverymethod-venue`}>Detail</span> <br /><br />
                        <input type="text" name='detail' placeholder='Please type in leading text'
                            className={`deliverymethod-venue-input ${clicked ? 'clicked' : ''}`}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <br /> <br /><br />
                    <button type='submit' className={`deliverymethod-submitbutton ${clicked ? 'clicked' : ''}`}>CONTINUE TO SHIPPING OPTIONS</button>
                </div>
            </form>
        </div>
    );
}

export default DeliveryMethod;