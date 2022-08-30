import { useSelector } from 'react-redux'
import { AnimatePresence } from 'framer-motion'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { MainPage, SinglePageMovie } from '../pages/index.js'

function App() {
	const { signing } = useSelector((state) => state.signUp)

	if (signing) {
		document.body.style.overflow = 'hidden'
	} else {
		document.body.style.overflow = ''
	}

	return (
		<div className='App'>
			<BrowserRouter>
				<AnimatePresence>{signing && <Sidebar />}</AnimatePresence>
				<main className='w-full h-full bg-[#1E1746]'>
					<Routes>
						<Route element={<Header />}>
							<Route path='/' element={<MainPage />} />
							<Route path='/movies/:id' element={<SinglePageMovie />} />
						</Route>
					</Routes>
				</main>
			</BrowserRouter>
		</div>
	)
}

export default App

//todo понять как сделать выдвижение модал окна Sidebar поверх всего
