import { useLayoutEffect, useRef } from "react";
import { gsap } from 'gsap';

import './Splash.scss';

const Splash = ({setIsReady}) => {

    const splashRef = useRef();

    useLayoutEffect(() => {

        let ctx = gsap.context(() => {

            const splashTl = gsap.timeline();
            const body = document.querySelector('body');

            splashTl.add(() => {
                body.classList.add('stop-scrolling');
            })
            splashTl.to('.splash__text span', {autoAlpha: 1});
            splashTl.from('.splash__text span', {yPercent: 150, stagger: .125, duration: .325, ease: 'Power3.inOut'});
            splashTl.to('.splash__text span', {yPercent: 150, stagger: .125, duration: .325, ease: 'Power3.inOut'}, '+=1.4');
            splashTl.to('.splash__slice', {yPercent: 100, stagger: .125, duration: .7, ease: 'Power4.inOut'}, '<.125');
            splashTl.add(() => {
                body.classList.remove('stop-scrolling');
                setIsReady(true);
            }, '<.05')

        }, splashRef)

        return () => ctx.revert();

    }, [])

    return (
        <aside className="splash" ref={splashRef}>
            <span className="splash__text"><span>Developer,</span></span>
            <span className="splash__text"><span>designer</span></span>
            <span className="splash__text"><span>& runner.</span></span>
            <div className="splash__slice"></div>
            <div className="splash__slice"></div>
            <div className="splash__slice"></div>
        </aside>
     );
}

export default Splash;