import React from 'react';
import Nav from '../Nav';
import './ProfileScreen.css';
import avatar from '../img/avatar.png';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../Firebase';


function ProfileScreen() {

    const user = useSelector(selectUser);

    return (
        <div className='profileScreen'>
            <Nav />
            <div className='profileScreen_body'>
                <h1>Edit Profile</h1>
                <div className='profileScreen_info'>
                    <img src={avatar} alt='avatar' />
                    <div className="profileScreen_details">
                        <h2>{user.email}</h2>

                        <div className="profileScreen_plans">
                            <h3>Plans</h3>
                            <p>Renewal date: 29/09/2021</p>
                            <button>Subcribe</button>
                            <h4>Netflix standard <span>1080p</span></h4>

                            <button>Subcribe</button>
                            <h4>Netflix basic <span>480p</span></h4>

                            <button className="profileScreen_currentPlan">Current plan</button>
                            <h4>Netflix Premium <span>4k+HDR</span></h4>
                            <button className="profileScreen_signOut" onClick={() => auth.signOut()}>Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileScreen;