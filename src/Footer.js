import React from 'react';
import './Footer.css';
import tmdb from './img/tmdb.svg';

const Footer = () => { 

    const year = new Date().getFullYear();

    return (
        <footer>
                        <hr />

            <div class="footer-content">
               
            <div class="items">
                <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Investor Relations</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Speed Test</a></li>
                </ul>
                </div>    
            <div class="items">
                <ul>
                    <li><a href="#">Help Centre</a></li>
                    <li><a href="#">Jobs</a></li>
                    <li><a href="#">Cookie Prefernces</a></li>
                    <li><a href="#">Legal Notices</a></li>
                </ul>
                </div>         
                <div class="items">
                <ul>
                    <li><a href="#">Account</a></li>
                    <li><a href="#">Ways to watch</a></li>
                    <li><a href="#">Corporate Information</a></li>
                    <li><a href="#">Netflix Originals</a></li>
                </ul>
                </div>
                <div class="items">
                    <ul>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Media Centre</a></li>
                    </ul>
                </div>

            </div>
            <hr />
            <img src={tmdb} alt='tmdb logo' />
            <p class="end">Netflix Clone! No rights reserved - this is a demo!</p>
            <p class="end">Created by {year} <a href="https://www.linkedin.com/in/bhumika-jain-680b28188/" target='new'>@Bhumika Jain</a></p>
        
    </footer>
    )
}

export default Footer
