import { useLayoutEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './ProjectCard.scss';

const ProjectCard = ({img, title, desc, livelink, repolink}) => {

    const cardRef = useRef();

    useLayoutEffect(() => {

        setTimeout(() => {
            let ctx = gsap.context(() => {

                gsap.registerPlugin(ScrollTrigger);

                const card = cardRef.current;
                const cardImgMask = card.querySelector('.project-card__img span');
                const cardImg = card.querySelector('.project-card__img img');
                const cardTitle = card.querySelector('.project-card__title span');
                const cardDesc = card.querySelector('.project-card__desc');
                const cardButtons = card.querySelectorAll('.btn');

                const cardTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 60%'
                    }
                })

                cardTl.to(cardImgMask, {width: '100%', duration: .4, ease: 'power4'})
                cardTl.to(cardImgMask, {xPercent: 100, duration: .6, ease: 'power4'}, '-=.1')
                cardTl.to(cardImg, {opacity: 1, duration: 0.01}, '<');
                cardTl.to(cardImg, {scale: 1, duration: 1.2, ease: 'power3'}, '<');
                cardTl.from(cardTitle, {yPercent: -100, duration: .35, ease: 'power3.inOut'}, '-=1.2')
                cardTl.from(cardDesc, {autoAlpha: 0, duration: .4}, '-=.8')
                cardTl.from(cardButtons, {autoAlpha: 0, duration: .3, stagger: .125}, '-=.425')


            }, cardRef)

            return () => ctx.revert();
        }, 2000);

    }, [])

    return (
        <div className="project-card" ref={cardRef}>
            <div className="project-card__img">
                <span></span>
                <img src={img} alt="" />
            </div>
            <div className="project-card__info">
                <h3 className="project-card__title"><span>{title}</span></h3>
                <div className="project-card__desc" dangerouslySetInnerHTML={{__html: desc}}></div>
            </div>
            <div className="project-card__actions">
                {livelink && <a href={livelink} className="btn "><span>View project</span></a>}
                {repolink && <a href={repolink} className="btn btn--outline"><span>View source code</span></a>}
            </div>


        </div>
     );
}

export default ProjectCard;