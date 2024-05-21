import './styles/main.css'

import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'
import ProjectPage from './pages/ProjectPage'
import { useEffect } from 'react'

function App() {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<div className='App'>
			<Router>
				<Navbar />
				<Routes>
					<Route path='' element={<Home />} />
					<Route path='projects' element={<Projects />} />
          <Route path='project/:slug' element={<ProjectPage />} />
					<Route path='contacts' element={<Contacts />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	)
}

export default App
