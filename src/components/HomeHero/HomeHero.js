import { ReactComponent as LogoIcon } from '../../icons/logo.svg';
import { useLayoutEffect, useRef } from "react";
import { gsap } from 'gsap';

import './HomeHero.scss'

const HomeHero = () => {

    const heroRef = useRef();

    useLayoutEffect(() => {

        let ctx = gsap.context(() => {

            const heroTl = gsap.timeline({delay: 2, defaults: {ease: 'power2.inOut'}});
            heroTl.delay(2.5);
            heroTl.from('.home-hero__title span', { yPercent: -100, duration: .75, stagger: .125});
            heroTl.from('.home-hero__intro span', { yPercent: -300, duration: .8}, '-=.65');
            heroTl.from('.btn', { autoAlpha: 0, duration: .6, stagger: .125}, '-=.4');


        }, heroRef)

        return () => ctx.revert();

    }, [])


    return (
        <section className="home-hero section-brand" ref={heroRef} id="#about">
            <div className="home-hero__content container">
                <h1 className="home-hero__title"><span>Hi,</span> <span>I'm</span> <span>Jamie</span></h1>
                <p className="home-hero__intro"><span>Frontend developer based in the UK, with an interest in graphic design and the great outdoors.</span></p>
                <div className="home-hero__actions">
                    <a href="#projects" className="btn">View projects</a>
                    {/* <a href="/" className="btn btn--outline" disabled><span>Download resume</span></a> */}
                </div>
            </div>
            <div className="home-hero__bg">
                <LogoIcon />
            </div>
        </section>
     );
}

export default HomeHero;