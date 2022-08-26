import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const filmsApi = createApi({
	reducerPath: 'awaitsFilms',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.kinopoisk.dev/',
	}),
	endpoints: (build) => ({
		getAwaitsFilms: build.query({
			query: () => `movie?search=1013&field=id&token=1RCZWM1-8FEMZ8V-PTZQ3CT-M9EB7NH`,
		}),
	}),
})

export const { useGetAwaitsFilmsQuery } = filmsApi

//todo разобраться как передать объект header в RTK query и сделать запрос
