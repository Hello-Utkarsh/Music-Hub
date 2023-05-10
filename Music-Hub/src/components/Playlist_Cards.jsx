import React, { Component, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { set_playlist_id } from './features/store'

export default function Playlist_Cards(props) {
  const playlist_data = props.playlist_data

  useEffect(() => {
    // get_id()
  })

  

  // window.onload = get_id()

  return (
    <div className='playlist bg-gray-700 mx-4 my-3 h-64 w-48 hover:bg-gray-500 transition-colors duration-200 justify-center items-center flex flex-col'>

      <Link to='inplaylist'>
        <div className='px-2 pt-3 py-9 w-[95%] h-[90%]' id='abc'>

          <img src={props.playlist_img} alt="" className='m-auto w-[100%] h-[60%] mt-4' />

          <h3 className='text-white font-normal pt-1 px-1'> {props.playlist_name} </h3>
          <p className='text-sm text-gray-400'>{props.description}...</p>

        </div>
      </Link>
    </div>
  )
}
