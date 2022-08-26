import { configureStore } from '@reduxjs/toolkit'

import { filmsApi } from './query/filmsApi'
import signUp from './reducers/signUpSlice'

const store = configureStore({
	reducer: { [filmsApi.reducerPath]: filmsApi.reducer, signUp },
	devTools: process.env.NODE_ENV !== 'production',
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(filmsApi.middleware),
})

export default store
