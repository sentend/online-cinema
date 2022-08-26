import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper'

import watchLater from '../assets/watch_later.svg'

const Slider = () => {
	return (
		<Swiper
			centeredSlides={true}
			autoplay={{
				delay: 5000,
				disableOnInteraction: false,
			}}
			navigation
			loop={true}
			spaceBetween={50}
			slidesPerView={1}
			modules={[Autoplay, Navigation]}
			onSlideChange={() => console.log('slide change')}
			className=''
		>
			<SwiperSlide>
				<img
					src='https://avatars.mds.yandex.net/get-ott/1672343/2a0000016cc7177239d4025185c488b1bf43/orig'
					alt=''
				/>
				<div className='buttons'>
					<button className='primary'>Смотреть</button>
					<button className='second'>Трейлер</button>
					<button className='second'>
						<img src={watchLater} alt='' />
					</button>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<img
					src='https://pyxis.nymag.com/v1/imgs/630/6e0/eb215ad90cd826b9e57ff505f54c5c7228-07-avatar.2x.rsocial.w600.jpg'
					alt=''
				/>
				<div className='buttons'>
					<button className='primary'>Смотреть</button>
					<button className='second'>Трейлер</button>
					<button className='second'>
						<img src={watchLater} alt='' />
					</button>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<img src='https://media.kg-portal.ru/movies/a/avengers4/posters/avengers4_79.jpg' alt='' />
				<div className='buttons'>
					<button className='primary'>Смотреть</button>
					<button className='second'>Трейлер</button>
					<button className='second'>
						<img src={watchLater} alt='' />
					</button>
				</div>
			</SwiperSlide>
		</Swiper>
	)
}

export default Slider
