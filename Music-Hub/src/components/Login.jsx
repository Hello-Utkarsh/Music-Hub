import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div className='h-[100vh] w-[100vw] bg-green-500 flex justify-center items-center flex-col'>
        <img className='w-[75vw]' src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png" alt="" />
        <button className='text-green-400 text-center bg-black text-3xl h-16 w-72 rounded-2xl'>Connet To Spotify</button>
      </div>
    )
  }
}
