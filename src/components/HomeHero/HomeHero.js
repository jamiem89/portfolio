import { useLayoutEffect, useRef } from "react";
import { gsap } from 'gsap';

import './HomeHero.scss'

const HomeHero = () => {

    const heroRef = useRef();

    useLayoutEffect(() => {

        let ctx = gsap.context(() => {

            const heroTl = gsap.timeline();
            heroTl.delay(.2);
            heroTl.from('.home-hero__title', { autoAlpha: 0, duration: .5});
            heroTl.from('.home-hero__intro', { autoAlpha: 0, duration: .5}, '-=-.2');
            heroTl.from('.btn', { autoAlpha: 0, duration: .5, stagger: .25}, '-=-.2');

        }, heroRef)

        return () => ctx.revert();

    }, [])


    return (
        <section className="home-hero section-brand" ref={heroRef}>
            <div className="home-hero__content container">
                <h1 className="home-hero__title">Hi, I'm Jamie</h1>
                <p className="home-hero__intro">Frontend developer based in the UK, with an interest in graphic design and the great outdoors.</p>
                <div className="home-hero__actions">
                    <a href="/" className="btn"><span>View projects</span></a>
                    <a href="/" className="btn btn--outline"><span>Download resume</span></a>
                </div>
            </div>
        </section>
     );
}

export default HomeHero;