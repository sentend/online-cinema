import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const token = '1RCZWM1-8FEMZ8V-PTZQ3CT-M9EB7NH'

export const filmsApi = createApi({
	reducerPath: 'movies',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.kinopoisk.dev/',
	}),
	endpoints: (build) => ({
		getPopularFilms: build.query({
			query: () =>
				`movie?field=rating.kp&search=7-10&field=year&search=2017-2020&field=typeNumber&search=1&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&limit=15&token=${token}`,
		}),
		getPopularSeries: build.query({
			query: () =>
				`movie?field=rating.kp&search=7-10&field=year&search=2017-2020&field=typeNumber&search=2&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&limit=15&token=${token}`,
		}),
		getMovieById: build.query({
			query: (id) => `movie?search=${id}&field=id&token=1RCZWM1-8FEMZ8V-PTZQ3CT-M9EB7NH`,
		}),
	}),
})

export const { useGetPopularFilmsQuery, useGetPopularSeriesQuery, useGetMovieByIdQuery } = filmsApi

//todo разобраться как передать объект header в RTK query и сделать запрос
