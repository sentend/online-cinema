import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { Link, Outlet, NavLink } from 'react-router-dom'

import { userStatusChanged } from '../store/reducers/signUpSlice'

import logo from '../assets/ANTA.svg'
import profile from '../assets/profile.svg'

const Header = () => {
	const dispatch = useDispatch()

	return (
		<>
			<header className=' w-full bg-[#1E1746] flex justify-center border-[#6256EC] border-b'>
				<div className='flex justify-between items-center h-24 w-[1647px]'>
					<Link to='/'>
						<img src={logo} alt='' className='h-[34px]' />
					</Link>
					<div className='flex justify-between  text-gray-300 text-lg group'>
						<ul className='flex justify-between w-[750px] '>
							<li className='hover:text-white transition-all duration-300'>
								<NavLink style={({ isActive }) => ({ color: isActive ? '#fff' : 'inherit' })} to='/'>
									Фильмы
								</NavLink>
							</li>
							<li className='hover:text-white transition-all duration-300'>
								<NavLink to='/'>Сериалы</NavLink>
							</li>
							<li className='hover:text-white transition-all duration-300'>
								<NavLink to='/'>Смотреть позже</NavLink>
							</li>
							<li className='hover:text-white transition-all duration-300'>
								<NavLink to='/'>Коллекции</NavLink>
							</li>
							<li className='hover:text-white transition-all duration-300'>
								<NavLink to='/'>
									<AiOutlineSearch style={{ fontSize: 25 }} />
								</NavLink>
							</li>
						</ul>
					</div>
					<div className='cursor-pointer' onClick={() => dispatch(userStatusChanged())}>
						<img src={profile} alt='' />
					</div>
				</div>
			</header>
			<Outlet />
		</>
	)
}

export default Header
