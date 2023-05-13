import React, { Component } from 'react'
import { useDispatch } from 'react-redux'
import { set_play_song } from './features/store'

export default function Song_Cards(props) {
  const dispatch = useDispatch()

  const play_song = () => {
    // console.log(props.element)
    dispatch(set_play_song(props.element))
  }

  return (
    <div className='bg-black w-full py-10 h-14 flex items-center cursor-pointer' onClick={play_song}>
      <div className='w-[30%] flex items-center px-[9px]'>
        <img src={props.img} className='h-10 px-[9px]' alt="" />
        <div className='px-[9px]'>
          <h2 className='text-gray-200 text-[17px]'>{props.name}</h2>
          <p className='text-gray-400 text-[15px]'>{props.artist}</p>
        </div>
      </div>
      <div className='flex items-center'>
        <h3 className='text-gray-400'></h3>
      </div>
      <span className="material-symbols-outlined pl-28 cursor-pointer" style={{color: 'white'}} >
        favorite
      </span>
    </div>
  )
}

