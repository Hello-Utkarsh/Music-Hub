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

export const playlist_id = createSlice({
  name: 'playlist_id',
  initialState: {
    value: undefined
  },
  reducers: {
    set_playlist_id: (state, id) => {
      state.value = id.payload
    }
  }
})

export const profile_details = createSlice({
  name: 'profile_details',
  initialState: {
    value: undefined
  },
  reducers: {
    set_details: (state, details) => {
      state.value = details.payload
    }
  }
})

export default configureStore({
  reducer: {
    token: token.reducer,
    hash_token: hash_token.reducer,
    playlist_id: playlist_id.reducer,
    profile_details: profile_details.reducer
  }
})

// Action creators are generated for each case reducer function
export const { set_token } = token.actions
export const {set_hash} = hash_token.actions
export const {set_playlist_id} = playlist_id.actions
export const {set_details} = profile_details.actions
// export default counterSlice.reducer