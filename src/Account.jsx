import LoginForm from './LoginForm';
import Register from './RegisterForm';
import './Account.css'
import React, { useState } from 'react';


function Account({ showLoginForm, showRegisterForm, clicked }) {
    const [showLoginFormState, setShowLoginFormState] = useState(showLoginForm);
    const [showRegisterFormState, setShowRegisterFormState] = useState(showRegisterForm);

    const handleSignInClick = () => {
        setShowLoginFormState(true);
        setShowRegisterFormState(false); // Ẩn form đăng ký khi hiển thị form đăng nhập
    };

    const handleRegisterClick = () => {
        setShowLoginFormState(false); // Ẩn form đăng nhập khi hiển thị form đăng ký
        setShowRegisterFormState(true);
    };

    return (
        <div>
            <br />
            <h1 className={`login-account-title ${clicked ? 'clicked' : ''}`}>ACCOUNT</h1>
            <table className='login-register'>
                <tr>
                    <td
                        className={`login-register-column ${showLoginFormState ? 'active' : ''} ${clicked ? 'clicked' : ''}`} 
                        onClick={handleSignInClick}>
                        <h4>SIGN IN</h4>
                    </td>
                    <td className={`login-register-column2 ${showRegisterFormState ? 'active' : ''} ${clicked ? 'clicked' : ''}`} 
                     onClick={handleRegisterClick}>
                        <h4>REGISTER</h4>
                    </td>
                </tr>
            </table>
            {
                showLoginFormState && (
                    <div className='login-form-container'>
                        <LoginForm />
                    </div>
                )
            }
            {
                showRegisterFormState && (
                    <div className='register-form-container'>
                        <Register />
                    </div>
                )
            }
        </div >
    );
}

export default Account;