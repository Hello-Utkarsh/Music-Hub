import { createSlice } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
// import counterReducer, { hello_world } from '../features/counterSlice'



export const counterSlice = createSlice({
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

// export const hash_token = createSlice({
//   name: 'hash_token',
//   initialState: {
//     value: undefined
//   },
//   reducers: {
//     set_hash_token: (state, x) => {
//       state.value = x.payload
//     }
//   }
// })

export default configureStore({
  reducer: {
    token: counterSlice.reducer,
    // hash_token: hash_token.reducer
  }
})

// Action creators are generated for each case reducer function
export const { set_token } = counterSlice.actions

// export default counterSlice.reducer