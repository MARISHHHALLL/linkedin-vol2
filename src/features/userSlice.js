import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  name: '',
  email: '',
  photo: '',
}
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.name = action.payload.name
      state.email = action.payload.email
      state.photo = action.payload.photo
    },
    logout: (state) => {
      state.name = null
      state.email = null
      state.photo = null
    },
  },
})

// Action creators are generated for each case reducer function
export const { logout, login } = userSlice.actions
export const selectUserName = (state) => state.user.name
export const selectUserEmail = (state) => state.user.email
export const selectUserPhoto = (state) => state.user.photo
export default userSlice.reducer
