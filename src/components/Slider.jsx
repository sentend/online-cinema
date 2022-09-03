import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper'
import { Link } from 'react-router-dom'

import watchLater from '../assets/watch_later.svg'

const buttons = [
	{
		class: 'primary hover:scale-110 duration-200 transition-all ease-in-out',
		title: 'смотреть',
	},
	{
		class: 'second hover:scale-110 duration-200 transition-all ease-in-out',
		title: 'смотреть',
	},
	{
		class: 'second hover:scale-110 duration-200 transition-all ease-in-out',
		src: watchLater,
	},
]

const Slider = () => {
	const elements = buttons.map((item, i) => {
		if (item.src) {
			return (
				<button key={i} className={item.class}>
					<img src={item.src} alt='' />
				</button>
			)
		}
		return (
			<button key={i} className={item.class}>
				{item.title}
			</button>
		)
	})

	return (
		<Swiper
			centeredSlides={true}
			autoplay={{
				delay: 5000,
				disableOnInteraction: false,
			}}
			navigation
			loop={true}
			spaceBetween={10}
			allowTouchMove={false}
			slidesPerView={1.3}
			modules={[Autoplay, Navigation]}
			className='main-slider flex items-center justify-center'
		>
			<SwiperSlide>
				<img
					src='https://avatars.mds.yandex.net/get-ott/1672343/2a0000016cc7177239d4025185c488b1bf43/orig'
					alt=''
				/>
				<div className='buttons'>{elements}</div>
			</SwiperSlide>
			<SwiperSlide>
				<img
					src='https://pyxis.nymag.com/v1/imgs/630/6e0/eb215ad90cd826b9e57ff505f54c5c7228-07-avatar.2x.rsocial.w600.jpg'
					alt=''
				/>
				<div className='buttons'>{elements}</div>
			</SwiperSlide>
			<SwiperSlide>
				<img src='https://media.kg-portal.ru/movies/a/avengers4/posters/avengers4_79.jpg' alt='' />
				<div className='buttons'>{elements}</div>
			</SwiperSlide>
		</Swiper>
	)
}

export default Slider
