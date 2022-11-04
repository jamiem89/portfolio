import { ReactComponent as Logo } from '../../icons/logo.svg';
import { useDetectScroll } from "@smakss/react-scroll-direction";
import './Header.scss'

const Header = () => {

    const [scrollDir] = useDetectScroll({});

    const toggleMenu = () => {
        const body = document.querySelector('body');
        body.classList.toggle('menu-active');
        body.classList.toggle('stop-scrolling');
    }

    return (
        <header className={
            scrollDir === "still" ? "header" : scrollDir === "up" ? "header" : "header is-hidden"
        }>
            <div className="container">
                <a href="/" className="header__logo">
                    <Logo />
                </a>

                <ul className="header__menu">
                    <li className="header__menu-item"><a className="header__menu-link" href="#">About</a></li>
                    <li className="header__menu-item"><a className="header__menu-link" href="#">Projects</a></li>
                    <li className="header__menu-item"><a className="header__menu-link" href="#">Get in touch</a></li>
                </ul>

                <button className="header__trigger" onClick={toggleMenu}>
                    Open menu
                </button>
            </div>
        </header>
     );
}

export default Header;