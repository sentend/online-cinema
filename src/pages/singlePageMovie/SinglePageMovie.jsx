import { useParams, Link } from 'react-router-dom'

import PopularNowSlider from '../../components/PopularNowSlider'
import { useGetMovieByIdQuery } from '../../store/query/filmsApi'

import background from '../../assets/backSinglePage.png'
import watchLater from '../../assets/watch_later.svg'
import bacgroundDark from '../../assets/dark.png'
import noBg from '../../assets/noBackground.png'
import noLogo from '../../assets/noLogo.png'

import './singlePageMovie.scss'

const SinglePageMovie = () => {
	const { id } = useParams()
	const movies = useGetMovieByIdQuery(id)
	const { data: dataMovies, isLoading } = movies

	if (isLoading) {
		return <div>loading...</div>
	}

	const backgroundImage = dataMovies.backdrop?.url ? 'http:' + dataMovies.backdrop.url.slice(5) : noBg

	const genres = dataMovies.genres.map((genre) => {
		return `${genre.name} `
	})

	const countries = dataMovies.countries.map((country) => {
		return `${country.name} `
	})

	const director = `${dataMovies.persons[0].name}${
		dataMovies.persons[1].enProfession === 'director' ? ', ' + dataMovies.persons[1].name : ''
	}`

	const hours = Math.floor(dataMovies.movieLength / 60)
	const min = (dataMovies.movieLength - hours * 60) % 60

	return (
		<div className='h-full w-full flex flex-col items-center'>
			<div
				className='movie-info relative w-full h-full'
				style={{
					backgroundImage: `url(${bacgroundDark}), url(${backgroundImage})`,
				}}
			>
				<img src={background} style={{ visibility: 'hidden' }} alt='' />
				<div className='absolute top-[88px] left-[68px] w-[550px]'>
					<img src={dataMovies.logo.url || noLogo} alt='' className='block h-[130px]' />
					<div className='w-full'>
						<div className='rating mt-[30px] mb-[8px]'>
							<span
								className={`${
									dataMovies.rating.kp >= 7 ? `text-green-500` : `text-[#8B8B8B]`
								} font-bold mr-[22px]`}
							>
								{dataMovies.rating.kp} КП
							</span>
							<span
								className={`${
									dataMovies.rating.imdb >= 7 ? `text-yellow-400` : `text-[#8B8B8B]`
								}  font-bold`}
							>
								{dataMovies.rating.imdb} IMDb
							</span>
						</div>
						<p className='text-[#8B8B8B] mb-[8px]'>
							{dataMovies.year} {genres} <br /> {countries} {dataMovies.ageRating || 16}+ {hours}ч {min} м
						</p>
						<p className='text-white text-xl mb-[8px]'>{dataMovies.shortDescription}</p>
						<span className='text-[#8B8B8B]'>
							Режиссёр:
							<Link to={`/persons/directors/${director}`}>
								<span className='hover:text-purple-200 duration-200'> {director}</span>
							</Link>
						</span>
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
				<div className='absolute right-0 bottom-[34px] right-[68px]'>
					<span className=' text-white font-bold text-[24px]'>Трейлер 1</span>
					<iframe
						id='ytplayer'
						type='text/html'
						width='280'
						height='150'
						src='http://trailers.s3.mds.yandex.net/video_original/148074-a0c3893cbcd23816c43ea0b3d5537f1c'
						frameBorder='0'
						className='rounded-2xl'
					/>
				</div>
			</div>
			<div className='recomendations w-[1647px]'>
				<span className=' mb-5'>Вам также может понравится</span>
			</div>
			<PopularNowSlider data={dataMovies.similarMovies} />
			{dataMovies.sequelsAndPrequels.length > 0 && (
				<>
					<div className='recomendations w-[1647px]'>
						<span className=' mb-5'>Сиквелы и приквелы</span>
					</div>
					<PopularNowSlider data={dataMovies.sequelsAndPrequels} />
				</>
			)}
		</div>
	)
}

export default SinglePageMovie

//todo добавить картинку на фон с сервера
