import Header from './components/Header/Header';
import HomeHero from './components/HomeHero/HomeHero';
import LatestProjects from './components/LatestProjects/LatestProjects';

function App() {

    return (
    <div className="app">
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
            },
            {
                img: 'https://via.placeholder.com/470x315',
                title: 'Lorem ipsum dolor sit amet.',
                desc: '<p>Custom WordPress theme built using HTML, SCSS, JS and PHP. Featured on <a href="#">siteinspire</a>.</p>',
                livelink: 'http://www.google.com',
                repolink: 'http://www.github.com'
            }
        ]}/>
    </div>
    );
}

export default App;
