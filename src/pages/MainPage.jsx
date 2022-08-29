import React, { useEffect } from 'react'

import Slider from '../components/Slider'
import PopularNowSlider from '../components/PopularNowSlider'
import RecSlider from '../components/PopularNowSeries'
import { useGetPopularFilmsQuery, useGetPopularSeriesQuery } from '../store/query/filmsApi'

import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'

const MainPage = () => {
	return (
		<div className='h-full pt-12 w-full flex flex-col items-center'>
			<Slider />
			<div className='recomendations w-[1647px] mb-5'>
				<span className='inline-block mb-5'>Популярные фильмы сегодня</span>
			</div>
			<PopularNowSlider data={useGetPopularFilmsQuery()} />
			<div className='recomendations w-[1647px] mb-5'>
				<span className='inline-block mb-5'>Самые популярные сериалы</span>
			</div>
			<PopularNowSlider data={useGetPopularSeriesQuery()} />
		</div>
	)
}

export default MainPage
