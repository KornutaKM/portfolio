import { NavLink } from 'react-router-dom'
import BtnDarkMode from '../btnDarkMode/BtnDarkMode'

import './Navbar.css'



const Navbar = () => {
	return (
		<nav className='nav'>
			<div className='container'>
				<div className='nav-row'>
					<NavLink to='/' className='logo'>
						<strong>Freelancer</strong> portfolio
					</NavLink>

					<BtnDarkMode />

					<ul className='nav-list'>
						<li className='nav-list__item'>
							<NavLink to='/' className='nav-list__link'>
								Home
							</NavLink>
						</li>
						<li className='nav-list__item'>
							<NavLink to='projects' className='nav-list__link'>
								Projects
							</NavLink>
						</li>
						<li className='nav-list__item'>
							<NavLink to='contacts' className='nav-list__link'>
								Contacts
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
