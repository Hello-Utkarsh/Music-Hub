import { createSlice } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
// import counterReducer, { hello_world } from '../features/counterSlice'



export const token = createSlice({
  name: 'token',
  initialState: {
    value: undefined
  },
  reducers: {
    set_token: (state, x) => {
      state.value = x.payload
    }
  }
})

export const hash_token = createSlice({
  name: 'hash_token',
  initialState: {
    value: 'hello'
  },
  reducers: {
    set_hash: (state, x) => {
      state.value = x.payload
    }
  }
})

export default configureStore({
  reducer: {
    token: token.reducer,
    hash_token: hash_token.reducer
  }
})

// Action creators are generated for each case reducer function
export const { set_token } = token.actions
export const {set_hash} = hash_token.actions
// export default counterSlice.reducer