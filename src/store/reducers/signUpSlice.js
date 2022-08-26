import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	signing: false,
}

const signUpSlice = createSlice({
	name: 'signUp',
	initialState,
	reducers: {
		userStatusChanged: (state) => {
			state.signing = !state.signing
		},
	},
})

const { actions, reducer } = signUpSlice

export default reducer

export const { userStatusChanged } = actions
