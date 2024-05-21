import {useParams } from "react-router-dom";
import BtnGitHub from '../components/btnGitHub/BtnGitHub'
import  { projects } from '../data/projects';

import img from './../img/projects/01-big.jpg'



const ProjectPage = () => {

	const {slug} = useParams();
	const project = projects[slug-1];
	return (
		<main className='section'>
			<div className='container'>
				<div className='project-details'>
					<h1 className='title-1'>{project.title}</h1>
					<img src={img} alt='' className='project-details__cover' />
					<div className='project-details__desc'>
						<p>{project.skills}</p>
					</div>
					{project.gitHubLink && <BtnGitHub link={'https://github.com'}/>}
				</div>
			</div>
		</main>
	)
}

export default ProjectPage
