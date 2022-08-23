import Header from './components/Header'
import MainPage from './pages/MainPage'

import './App.css'

function App() {
	return (
		<div className='App'>
			<Header />
			<main className='w-full bg-[#1E1746]'>
				<MainPage />
			</main>
		</div>
	)
}

export default App
