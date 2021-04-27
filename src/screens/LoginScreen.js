import React, {useState} from 'react';
import './LoginScreen.css';
import logo from '../img/netflixlogo.png';
import SignupScreen from './SignUpScreen';
import Footer from '../Footer';

function LoginScreen() {

    const [signIn, setSignIn]  = useState(false);

    return (
        <div className='loginScreen'>
            <div className='loginScreen_background'>   
                <img className ='loginScreen_logo' src={logo} alt='logo' />
                <button onClick={() => setSignIn(true)} className='loginScreen_button'>Sign In </button>
                <div className='loginScreen_gradient' />
            </div>
            <div className='loginScreen_body'>
                {signIn ? (<SignupScreen />) : (
                <>
                <h1>Unlimited files, TV programmes and more.</h1>
                <h2>Watch anywhere, Cancel at any time.</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                <div className='loginScreen_input'>
                    <form>
                        <input type='email' placeholder='Email Address'/>
                        <button onClick={() => setSignIn(true)} className='loginScreen_getStarted'>Get Started</button>
                    </form>
                </div>
                </>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default LoginScreen;