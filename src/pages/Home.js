import React from 'react';
import HomeMain from '../components/home/HomeMain'
import HomeDesc from '../components/home/HomeDesc'
import HomeResume from '../components/home/HomeResume';
import '../styles/Home/Home.css'


const Home = () => {
    return (
            <>
                <HomeMain/>
                <HomeDesc/>
                <HomeResume/>
            </>
    );
};

export default Home;