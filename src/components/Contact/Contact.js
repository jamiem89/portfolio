import { ReactComponent as Mail } from '../../icons/icon__mail.svg';
import { ReactComponent as Twitter } from '../../icons/icon__twitter.svg';
import { ReactComponent as Linkedin } from '../../icons/icon__linkedin.svg';
import { ReactComponent as Logo } from '../../icons/logo.svg';
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
            contactTl.from('.contact__list-item', {yPercent: 100, opacity: 0, duration: .6, ease: 'power3.inOut', stagger: .05}, '-=.5')

        }, contactRef)

        return () => ctx.revert();

    }, [])

    return (
        <section className="contact section-brand" ref={contactRef} id="contact">
            <h3 className="contact__title">
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
            <ul className="contact__list">
                <li className="contact__list-item">
                    <a href="https://www.linkedin.com/in/jamie-moore-360579147/">
                        <Linkedin />
                    </a>
                </li>
                <li className="contact__list-item">
                    <a href="https://twitter.com/JamieMooreDev">
                        <Twitter />
                    </a>
                </li>
                <li className="contact__list-item">
                    <a href="mailto:jamiemoore2689@gmail.com">
                        <Mail />
                    </a>
                </li>
            </ul>
            <div className="contact__bg">
                <Logo />
            </div>
        </section>
     );
}

export default Contact;