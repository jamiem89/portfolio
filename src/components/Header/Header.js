import { ReactComponent as Logo } from '../../icons/logo.svg';
import './Header.scss'

const Header = () => {

    const toggleMenu = () => {
        const body = document.querySelector('body');
        body.classList.toggle('menu-active');
    }

    return (
        <header className="header">
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