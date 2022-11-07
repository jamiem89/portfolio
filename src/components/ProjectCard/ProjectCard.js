import './ProjectCard.scss';

const ProjectCard = ({img, title, desc, livelink, repolink}) => {

    console.log(desc);

    return (
        <div className="project-card">
            <div className="project-card__img">
                <img src={img} alt="" />
            </div>
            <div className="project-card__info">
                <h3 className="project-card__title">{title}</h3>
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