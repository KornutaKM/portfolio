import { useEffect} from 'react'
import { useLocalStorage } from '../../utils/useLocalStorage'
import detectDarkMode  from '../../utils/detectDarkMode'

import sun from './sun.svg'
import moon from './moon.svg'

import './BtnDarkMode.css'

const BtnDarkMode = () => {
	// const [darkMode, setDarkMode] = useState('light')

	const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode())

	// const btnDarkModeRef = useRef(null)

	useEffect(() => {
		if (darkMode === 'dark') {
			document.body.classList.add('dark')
			// btnDarkModeRef.current.classList.add('dark-mode-btn--active')
		} else {
			document.body.classList.remove('dark')
			// btnDarkModeRef.current.classList.remove('dark-mode-btn--active')
		}
	}, [darkMode])

// Если меняются системные настройки, меняем тему
	useEffect(() => {
		window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light";
				setDarkMode(newColorScheme);

    });
	}, [setDarkMode])

	const toggleDarkMode = () => {
		darkMode === 'light' ? setDarkMode('dark') : setDarkMode('light')
	}

	const btnNormal = 'dark-mode-btn'
	const btnActive = 'dark-mode-btn dark-mode-btn--active'

	return (
		<button
			// ref={btnDarkModeRef}
			className={darkMode === 'dark' ? btnActive : btnNormal}
			onClick={toggleDarkMode}
		>
			<img src={sun} alt='Light mode' className='dark-mode-btn__icon' />
			<img src={moon} alt='Dark mode' className='dark-mode-btn__icon' />
		</button>
	)
}

export default BtnDarkMode
