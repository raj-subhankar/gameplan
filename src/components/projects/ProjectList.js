import React from 'react'
import ProjectSummmary from './ProjectSummary'

const ProjectList = ({projects}) => {
    return(
        <div className="project-list section">
           {projects && projects.map(project => {
                return(
                    <ProjectSummmary project={project} key={project.id}/>
                )
           })}
        </div>
    )
}

export default ProjectList