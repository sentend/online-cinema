import React, { useEffect } from 'react'

import Slider from '../components/Slider'

import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'

const MainPage = () => {
	return (
		<div className='h-screen pt-16'>
			<Slider />
		</div>
	)
}

export default MainPage

//todo вынести слайдер в отдельный компонент добавить картинки в слайдер и изменить размеры
