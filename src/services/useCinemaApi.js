import { useHttp } from '../hooks/http.hook'

const useCinemaApi = () => {
	const _awaitFilmUrl = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS'
	const { request } = useHttp()

	const getAwaitFilms = () => {
		request(_awaitFilmUrl).then((data) => console.log(data))
	}

	return {
		getAwaitFilms,
	}
}

export default useCinemaApi
