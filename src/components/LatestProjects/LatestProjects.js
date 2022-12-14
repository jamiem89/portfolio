import ProjectCard from '../ProjectCard/ProjectCard'
import { ReactComponent as LogoIcon } from '../../icons/logo.svg';

import './LatestProjects.scss';

const LatestProjects = ({projects} ) => {

    return (
        <section className="latest-projects section-dark" id="projects">
            <div className="container">
                <div className="latest-projects__col">
                    <h2 className="latest-projects__title">Recent work</h2>
                    <p className="latest-projects__intro">A selection of recent works, ranging from full custom WordPress builds, to bespoke ReactJS applications.</p>
                </div>
                <div className="latest-projects__col">
                    {projects && projects.map(project => {
                        return (
                            <ProjectCard
                                img={project.img}
                                title={project.title}
                                desc={project.desc}
                                livelink={project.livelink}
                                repolink={project.repolink}
                                key={project.livelink}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
     );
}

export default LatestProjects;