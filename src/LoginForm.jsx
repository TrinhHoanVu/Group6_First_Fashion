import { useNavigate } from 'react-router-dom'

function LoginForm(clicked) {
    const navigate = useNavigate();
    return (
        <div>
            <form onSubmit={() => navigate('/')}>
                < table >
                    <tr>
                        <td colSpan={2} className='login-title-box'>
                            <span className={`login-title ${clicked ? 'clicked' : ''}`}>WELCOME BACK.</span>
                            <br />
                            <span className={`login-bodytext ${clicked ? 'clicked' : ''}`}>Sign in with your email and password.</span></td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <br />
                            <h4 className={`login-email-password-title`} style={{ textAlign: 'left' }}>Email</h4>
                            <input type="email" placeholder='Email' className={`login-email-box ${clicked ? 'clicked' : ''}`} />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <br /> <br />
                            <h4 className={`login-email-password-title`} style={{ textAlign: 'left' }}>Password</h4>
                            <input type="password" placeholder='Password' className={`login-password-box ${clicked ? 'clicked' : ''}`} />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <br />

                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <div style={{ display: 'flex', justifyContent: 'left' }}>
                                <input type="checkbox" /><span className={`login-remember ${clicked ? 'clicked' : ''}`}>Remember me (optional)</span>
                            </div>
                            <div className={`login-policy ${clicked ? 'clicked' : ''}`} style={{ textAlign: 'left' }}>
                                <br />
                                By signing in, I agree to FIRST FASHION's <br />
                                Privacy Policy
                                and
                                Legal Statement
                                .
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <br />
                            <button type='submit' className={`login-submit ${clicked ? 'clicked' : ''}`} style={{ cursor: 'pointer' }}><h3>SIGN IN</h3></button>
                        </td>
                    </tr>
                </table>
            </form >
            <br /><br /><br /><br /><br />
        </div >
    );
}

export default LoginForm;