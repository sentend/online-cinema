import React, { useEffect } from 'react'

import Slider from '../components/Slider'
import RecSlider from '../components/RecSlider'
import { useGetAwaitsFilmsQuery } from '../store/query/filmsApi'

import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'

const MainPage = () => {
	const { data, isLoading, isError } = useGetAwaitsFilmsQuery()

	console.log(data)

	return (
		<div className='h-full pt-12 w-full flex flex-col items-center'>
			<Slider />
			<div className='recomendations w-[1647px] mb-5'>
				<span>Самые ожидаемые фильмы</span>
			</div>
			<RecSlider />
		</div>
	)
}

export default MainPage
