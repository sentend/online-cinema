import { useParams } from 'react-router-dom'

import PopularNowSlider from '../../components/PopularNowSlider'
import { useGetMovieByIdQuery } from '../../store/query/filmsApi'

import background from '../../assets/backSinglePage.png'
import watchLater from '../../assets/watch_later.svg'
import bacgroundDark from '../../assets/dark.png'

import './singlePageMovie.scss'

const SinglePageMovie = () => {
	const { id } = useParams()
	const { data, isLoading } = useGetMovieByIdQuery(id)

	console.log(data)

	if (isLoading) {
		return <div>loading...</div>
	}

	const genres = data.genres.map((genre) => {
		return `${genre.name} `
	})

	const countries = data.countries.map((country) => {
		return `${country.name} `
	})

	const director = data.persons[0].name

	const hours = Math.floor(data.movieLength / 60)
	const min = (data.movieLength - hours * 60) % 60

	return (
		<div className='h-full w-full flex flex-col items-center'>
			<div
				className='movie-info relative w-full h-full'
				style={{ backgroundImage: `url(${bacgroundDark}), url(${data.backdrop.url})` }}
			>
				<img src={background} style={{ visibility: 'hidden' }} alt='' />
				<div className='absolute top-[88px] left-[68px] w-[550px]'>
					<img src={data.logo.url || ''} alt='' className='block h-[140px]' />
					<div className='w-full'>
						<div className='rating mt-[30px] mb-[8px]'>
							<span className='text-green-500 font-bold mr-[22px]'>{data.rating.kp}</span>
							<span className='text-[#8B8B8B] font-bold'>{data.rating.imdb} IMDb</span>
						</div>
						<p className='text-[#8B8B8B] mb-[8px]'>
							{data.year} {genres} <br /> {countries} {data.ageRating || 16}+ {hours}ч {min} мин
						</p>
						<p className='text-white text-xl mb-[8px]'>{data.shortDescription}</p>
						<p className='text-[#8B8B8B]'>Режиссёр: {director}</p>
					</div>
				</div>
				<div className='absolute flex left-[68px] bottom-[100px]'>
					<button className='primary hover:scale-110 duration-200 transition-all ease-in-out'>
						Смотреть
					</button>
					<button className='second hover:scale-110 duration-200 transition-all ease-in-out'>
						<img src={watchLater} alt='' />
					</button>
				</div>
			</div>
			<div className='recomendations w-[1647px]'>
				<span className=' mb-5'>Популярные фильмы сегодня</span>
			</div>
			<PopularNowSlider data={data.similarMovies} />
		</div>
	)
}

export default SinglePageMovie

//todo добавить картинку на фон с сервера
