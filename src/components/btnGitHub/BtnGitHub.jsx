import icon from '../../img/icons/gitHub-black.svg'
import './BtnGitHub.css'

const BtnGitHub = ({ link }) => {
	return (
		<a target='_blank' rel='noreferrer' href={link} className='btn-outline'>
			<img src={icon} alt='' />
			GitHub repo
		</a>
	)
}

export default BtnGitHub
