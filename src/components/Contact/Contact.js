import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './Contact.scss';

const Contact = () => {

    const contactRef = useRef();

    useLayoutEffect(() => {

        let ctx = gsap.context(() => {

            gsap.registerPlugin(ScrollTrigger);

            const contactTl = gsap.timeline({
                scrollTrigger: {
                    trigger: contactRef.current,
                    start: 'top 70%'
                }
            })

            contactTl.from('.contact__title span', {yPercent: 120, duration: .6, stagger: 0.05, ease: 'power3.inOut'})
            contactTl.add(() => {
                console.log('timmy')
            })

        }, contactRef)

        return () => ctx.revert();

    }, [])

    return (
        <section className="contact" ref={contactRef}>
            <h3 class="contact__title">
                <span>F</span>
                <span>a</span>
                <span>n</span>
                <span>c</span>
                <span>y</span>
                &nbsp;
                <span>a</span>
                &nbsp;
                <span>c</span>
                <span>h</span>
                <span>a</span>
                <span>t</span>
                <span>?</span>
                </h3>
        </section>
     );
}

export default Contact;