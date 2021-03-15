import React from 'react';
import HomeMain from '../components/home/HomeMain'
import HomeDesc from '../components/home/HomeDesc'
import '../styles/Home/Home.css'
import HomeResume from '../components/home/HomeResume';


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