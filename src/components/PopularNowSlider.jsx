import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { Link } from 'react-router-dom'

const PopularNowSlider = (props) => {
	const { data } = props.data
	console.log(data)
	const renderItems = () => {
		let renderItems

		if (data) {
			renderItems = data.docs.map((item) => {
				return (
					<SwiperSlide key={item.id} style={{ width: 300 }}>
						<Link to={`/movies/${item.id}`} className='shadow-md'>
							<div className='hover:scale-105 duration-200 relative'>
								<img
									className='relative w-full object-cover h-[400px]'
									src={item.poster.previewUrl}
									alt=''
								/>
							</div>
						</Link>
					</SwiperSlide>
				)
			})
		}

		return renderItems
	}

	const elements = renderItems()

	return (
		<Swiper
			slidesPerView={6.3}
			slidesPerGroup={4}
			spaceBetween={0}
			navigation
			modules={[Navigation]}
			className='recomendation-swiper'
		>
			{elements}
		</Swiper>
	)
}

export default PopularNowSlider

//todo разобраться как сделать меньше отсутп между фильмами
