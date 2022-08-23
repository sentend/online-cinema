import React from 'react'

import logo from '../assets/ANTA.svg'
import profile from '../assets/profile.svg'

const Header = () => {
	return (
		<header className=' w-full bg-[#1E1746] flex justify-center border-[#6256EC] border-b'>
			<div className='flex justify-between items-center h-24 w-[1647px]'>
				<a href=''>
					<img src={logo} alt='' className='h-[34px]' />
				</a>
				<div className='flex justify-between  text-gray-300 text-lg group'>
					<ul className='flex justify-between w-[750px] '>
						<li className='hover:text-white transition-all duration-300'>
							<a href=''>Фильмы</a>
						</li>
						<li className='hover:text-white transition-all duration-300'>
							<a href=''>Сериалы</a>
						</li>
						<li className='hover:text-white transition-all duration-300'>
							<a href=''>Смотреть позже</a>
						</li>
						<li className='hover:text-white transition-all duration-300'>
							<a href=''>Коллекции</a>
						</li>
						<li className='hover:text-white transition-all duration-300'>
							<a href=''>Поиск</a>
						</li>
					</ul>
				</div>
				<div>
					<img src={profile} alt='' />
				</div>
			</div>
		</header>
	)
}

export default Header
