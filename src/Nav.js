import React, { useEffect, useState } from 'react';
import './Nav.css';
import logo from './img/netflixlogo.png';
import avatar from './img/avatar.png';
import { useHistory } from 'react-router';


function Nav() {
    const [show, handleShow] = useState(false);
    const history = useHistory();

    const transitionNavBar = () => {
         if (window.scrollY > 100){
            handleShow(true);
        }else{
            handleShow(false); 
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
        return() => window.removeEventListener('scroll', transitionNavBar)
    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <div className='nav_content'>
            <img onClick={() => history.push('/')} className='nav_logo' src={logo} alt="logo" />
            <img onClick={() => history.push('/profile')} className='nav_avatar' src={avatar} alt="avatar" />
            </div>
        </div>
    );
}

export default Nav;