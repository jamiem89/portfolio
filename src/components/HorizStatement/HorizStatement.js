import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/src/ScrollTrigger";

const HorizStatement = () => {

    const horizSection = useRef();

    useLayoutEffect(() => {

        let gsapContext = gsap.context(() => {

            gsap.registerPlugin(ScrollTrigger);

            const title = document.querySelector('.title');
            const contactSection = document.querySelector('.contact');

            const tl = gsap.timeline({scrollTrigger: {
                trigger: contactSection,
                scrub: 1.5,
                pin: document.querySelector('#root'),
                pinSpacer: false,
                start: 'top top',
                end: "bottom bottom",
                markers: true
            }})

            tl.to(title, {xPercent: -200, duration: 10});

        }, horizSection)

        return () => gsapContext.revert();

    }, []);

    return (
        <section className="contact" ref={horizSection} style={{'minHeight' : '60vh', 'overflowX': 'hidden', 'paddingLeft' : '20vw'}}>
            <h1 className="title" style={{'fontSize': '23vw', 'whiteSpace' : 'noWrap' }}>Fancy a chat? Get in touch</h1>
        </section>

     );
}

export default HorizStatement;