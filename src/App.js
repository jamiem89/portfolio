import { useState } from 'react';

import Splash from './components/Splash/Splash';
import Header from './components/Header/Header'
import HomeHero from './components/HomeHero/HomeHero';
import LatestProjects from './components/LatestProjects/LatestProjects';
import ConfettiCanon from './components/ConfettiCanon/ConfettiCanon';
import Contact from './components/Contact/Contact'

function App() {

    const [isReady, setIsReady] = useState(true)

    return (
    <div className="app stop-scrolling">

        {/* <Splash setIsReady={setIsReady}/> */}

        {isReady && (<>
            <Header />
            <HomeHero />
            <LatestProjects projects={[
                {
                    img: 'https://via.placeholder.com/470x315',
                    title: 'Lorem dolor sit amet.',
                    desc: '<p>Custom WordPress theme built using HTML, SCSS, JS and PHP. Featured on <a href="#">siteinspire</a>.</p>',
                    livelink: 'http://www.google.com',
                    repolink: 'http://www.github.com'
                },
                {
                    img: 'https://via.placeholder.com/470x315',
                    title: 'Consectetur adipisicing elit',
                    desc: '<p>Custom WordPress theme built using HTML, SCSS, JS and PHP. Featured on <a href="#">siteinspire</a>.</p>',
                    livelink: 'http://www.google.com',
                    repolink: ''
                }
            ]}/>
            <Contact />
            <ConfettiCanon />
        </>)}

    </div>
    );
}

export default App;
