import React, { Component, useEffect, useState } from 'react'
// import Song_api from '../components/Song_api'

function Login() {

  const [token, set_token] = useState(undefined)

  const client_id = import.meta.env.VITE_CLIENT_ID
  const clientSecret = import.meta.env.VITE_CLIENTSECRET

  const getToken = async () => {
    const result = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(client_id + ':' + clientSecret)
            
        },
        body: 'grant_type=client_credentials&client_id=your-client-id&client_secret=your-client-secret'
    })
    let parsed_data = await result.json()
    set_token(parsed_data)
  }


  


  return (
    <div className='h-[100vh] w-[100vw] bg-green-500 flex justify-center items-center flex-col'>
      <img className='w-[75vw]' src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png" alt="" />
      <button className='text-green-400 text-center bg-black text-3xl h-16 w-72 rounded-2xl' onClick={getToken} >Connect To Spoitfy</button>
    </div>
  )

}


export default Login