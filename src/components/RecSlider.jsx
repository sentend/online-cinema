import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper'

const RecSlider = () => {
	return (
		<Swiper slidesPerView={4} spaceBetween={40} navigation modules={[Navigation]} className='recomendation-swiper'>
			<SwiperSlide>
				<img
					src='https://pyxis.nymag.com/v1/imgs/630/6e0/eb215ad90cd826b9e57ff505f54c5c7228-07-avatar.2x.rsocial.w600.jpg'
					alt=''
				/>
			</SwiperSlide>
			<SwiperSlide>
				<img
					src='https://pyxis.nymag.com/v1/imgs/630/6e0/eb215ad90cd826b9e57ff505f54c5c7228-07-avatar.2x.rsocial.w600.jpg'
					alt=''
				/>
			</SwiperSlide>
			<SwiperSlide>
				<img
					src='https://pyxis.nymag.com/v1/imgs/630/6e0/eb215ad90cd826b9e57ff505f54c5c7228-07-avatar.2x.rsocial.w600.jpg'
					alt=''
				/>
			</SwiperSlide>
			<SwiperSlide>
				<img
					src='https://pyxis.nymag.com/v1/imgs/630/6e0/eb215ad90cd826b9e57ff505f54c5c7228-07-avatar.2x.rsocial.w600.jpg'
					alt=''
				/>
			</SwiperSlide>
			<SwiperSlide>
				<img
					src='https://pyxis.nymag.com/v1/imgs/630/6e0/eb215ad90cd826b9e57ff505f54c5c7228-07-avatar.2x.rsocial.w600.jpg'
					alt=''
				/>
			</SwiperSlide>
		</Swiper>
	)
}

export default RecSlider
