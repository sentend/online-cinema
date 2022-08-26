import { useDispatch } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'

import { userStatusChanged } from '../store/reducers/signUpSlice'
import FormSignUp from './FormSignUp'

import close from '../assets/close.svg'

const Sidebar = () => {
	const dispatch = useDispatch()

	const closeForm = (e) => {
		if (e.target.classList.contains('modal-bg')) {
			dispatch(userStatusChanged())
		}
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
			}}
			exit={{
				opacity: 0,
			}}
			onClick={closeForm}
			transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
			className='modal-bg overflow-hidden backdrop-blur-md px-5 fixed h-full w-full flex items-center justify-center top-0 left-0 z-[9]'
		>
			<motion.div
				initial={{ x: '100%' }}
				animate={{
					x: 0,
				}}
				exit={{
					x: '100%',
				}}
				transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
				className='fixed w-[590px] h-screen bg-[#090909] right-0 top-0'
			>
				<button
					onClick={() => dispatch(userStatusChanged())}
					className='rounded-[500px] h-[30px] w-[30px] bg-[#090909] flex justify-center items-center border border-[#525252] translate-x-[-43px] mt-[19px]'
				>
					<img src={close} alt='' />
				</button>
				<div className='flex justify-center items-center flex-col'>
					<h2 className='text-white text-2xl'>Регистрация</h2>
					<FormSignUp />
				</div>
			</motion.div>
		</motion.div>
	)
}

export default Sidebar

//todo добавить framer motion и понять как работает

/*
<div className='signup w-full h-full overflow-hidden'>
				<div className='signup__wrapper fixed'>
					<div className='fixed w-[590px] h-full bg-[#090909] right-0 top-0'>
						<button
							onClick={() => dispatch(userStatusChanged())}
							className='rounded-[500px] h-[30px] w-[30px] bg-[#090909] flex justify-center items-center border border-[#525252] translate-x-[-43px] mt-[19px]'
						>
							<img src={close} alt='' />
						</button>
						<div className='flex justify-center items-center flex-col'>
							<h2 className='text-white text-2xl'>Регистрация</h2>
							<FormSignUp />
						</div>
					</div>
				</div>
			</div> */
