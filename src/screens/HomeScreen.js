import React from 'react';
import './HomeScreen.css';
import Nav from '../Nav';
import Banner from '../Banner';
import requests from '../Requests';
import Row from '../Row';
import Footer from '../Footer';

export default function HomeScreen(){
    return(
        <div className='homeScreen'>
            <Nav />
            <Banner />
            <Row 
            title='NETFLIX ORIGINALS'
            fetchURL = {requests.fetchNetflixOriginals}
            isLargeRow/>
            <Row 
            title='Top Rated'
            fetchURL = {requests.fetchTopRated}
            />
            <Row 
            title='Treding Now'
            fetchURL = {requests.fetchTrending}
            />
            <Row 
            title='Romance'
            fetchURL = {requests.fetchRomanceMovie}
            />
            <Row 
            title='Action Movies'
            fetchURL = {requests.fetchActionMovies}
            />
            <Row 
            title='Comedy Movies'
            fetchURL = {requests.fetchComedyMovies}
            />
            <Footer />
        </div>
    )
}