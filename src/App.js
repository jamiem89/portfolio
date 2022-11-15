import { useState } from 'react';

import Splash from './components/Splash/Splash';
import Header from './components/Header/Header'
import HomeHero from './components/HomeHero/HomeHero';
import LatestProjects from './components/LatestProjects/LatestProjects';
import ConfettiCanon from './components/ConfettiCanon/ConfettiCanon';
import Contact from './components/Contact/Contact'

function App() {

    const [isReady, setIsReady] = useState(false)

    const scrollTop = () => {
        window.scrollTo(0, 0)
    }

    scrollTop();

    return (
    <div className="app stop-scrolling">

        <Splash setIsReady={setIsReady}/>

        {isReady && (<>
            <Header />
            <HomeHero />
            <LatestProjects projects={[
                {
                    img: '/images/cover-transform.jpg',
                    title: 'Transform Festival 2021-2022',
                    desc: '<p>Custom WordPress theme built using HTML, SCSS, JS and PHP. Featured on <a href="https://www.siteinspire.com/websites/10634-transform-festival">siteinspire</a>.</p>',
                    livelink: 'https://transformfestival.org'
                },
                {
                    img: '/images/cover-north-brew.jpg',
                    title: 'North Brew Co',
                    desc: '<p>A robust, flexible custom WordPress build bursting with personality. Built with a variety of tools, including JS, GSAP and ACF.</p>',
                    livelink: 'https://www.northbrewing.com/'
                },
                {
                    img: '/images/cover-medical-architecture.jpg',
                    title: 'Medical Architecture',
                    desc: '<p>A clean, minimal and modern custom WordPress theme, built with ACF.</p>',
                    livelink: 'https://medicalarchitecture.com/'
                }
            ]}/>
            <Contact />
            <ConfettiCanon />
        </>)}

    </div>
    );
}

export default App;
