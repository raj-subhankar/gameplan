import React from 'react'
import ProjectSummmary from './ProjectSummary'
import {Link} from 'react-router-dom'

const ProjectList = ({projects}) => {
    return(
        <div className="project-list section">
           {projects && projects.map(project => {
                return(
                    <Link to={"/project/" + project.id}>
                    <ProjectSummmary project={project} key={project.id}/>
                    </Link>
                )
           })}
        </div>
    )
}

export default ProjectList