import { useLayoutEffect, useRef } from 'react';
import { ReactComponent as Logo } from '../../icons/logo.svg';
import { useDetectScroll } from "@smakss/react-scroll-direction";
import { gsap } from 'gsap';

import './Header.scss'

const Header = () => {

    const [scrollDir] = useDetectScroll({});

    const toggleMenu = () => {
        const body = document.querySelector('body');
        body.classList.toggle('menu-active');
        body.classList.toggle('stop-scrolling');
    }

    const headerRef = useRef();

    useLayoutEffect(() => {

        let ctx = gsap.context(() => {

            const headerTl = gsap.timeline();

            headerTl.from('.header__logo', {yPercent: -200, rotate: 180, duration: .5, ease: 'power3.inOut'});
            headerTl.from('.header__menu-item', {yPercent: -250, duration: .5, stagger: .075, ease: 'power3.inOut'}, '<.125');
            headerTl.from('.header__trigger', {yPercent: -250, duration: .5, ease: 'power3.inOut'}, '<.125')

        }, headerRef)

        return () => ctx.revert();

    }, [])

    return (
        <header className={
            scrollDir === "still" ? "header" : scrollDir === "up" ? "header" : "header is-hidden"
        } ref={headerRef}>
            <div className="container">
                <a href="/" className="header__logo">
                    <Logo />
                </a>

                <ul className="header__menu">
                    <li className="header__menu-item"><a className="header__menu-link" href="#about">About</a></li>
                    <li className="header__menu-item"><a className="header__menu-link" href="#projects">Projects</a></li>
                    <li className="header__menu-item"><a className="header__menu-link" href="#contact">Get in touch</a></li>
                </ul>

                <button className="header__trigger" onClick={toggleMenu}>
                    Open menu
                </button>
            </div>
        </header>
     );
}

export default Header;