import { useSelector } from 'react-redux'
import { AnimatePresence } from 'framer-motion'

import Header from '../components/Header'
import MainPage from '../pages/MainPage'
import Sidebar from '../components/Sidebar'

function App() {
	const { signing } = useSelector((state) => state.signUp)

	if (signing) {
		document.body.style.overflow = 'hidden'
	} else {
		document.body.style.overflow = ''
	}

	return (
		<div className='App'>
			<AnimatePresence>{signing ? <Sidebar /> : null}</AnimatePresence>
			<Header />
			<main className='w-full bg-[#1E1746]'>
				<MainPage />
			</main>
		</div>
	)
}

export default App

//todo понять как сделать выдвижение модал окна Sidebar поверх всего
