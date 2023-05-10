import React, { Component, useEffect, useState } from 'react'
import Playlist_Cards from '../components/Playlist_Cards'
import { Link } from 'react-router-dom'
import { set_playlist_id } from './features/store'
import { useDispatch } from 'react-redux'

export default function Mainwindow(props) {

    const [song_playlist, set_song_playlist] = useState(undefined)
    const dispatch = useDispatch()

    useEffect(() => {
        getplaylist()
        // get_id()


    }, [])

    const get_id = () => {
        Array.from(document.getElementsByClassName('playlist')).map((element)=>{
            element.addEventListener('click', () => {
                dispatch(set_playlist_id(element.id))
              })
        })
    }

    // get_id()

    window.onload = get_id()


    const getplaylist = async () => {
        const result_playlist = await fetch('https://api.spotify.com/v1/browse/featured-playlists', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer  ' + props.token.access_token,
                'Content-type': 'application/json'
            }
        })

        const parsed_data = await result_playlist.json()
        set_song_playlist(parsed_data)
        // get_id()
    }
    if (song_playlist != null) {
        return (
            <div className='w-5/6 h-full ml-[16.66%] px-3 py-4 bg-gradient-to-b from-[#4705a4d6] to-[#0000005d]'>

                {/* Search Bar */}

                <div className='w-full flex justify-center'>
                    <div className='w-[60%] bg-gray-700 flex justify-center items-center rounded-xl'>
                        <span className="material-symbols-outlined pr-2" style={{ fontSize: "28px" }}>
                            Search
                        </span>
                        <input type="text" placeholder='Search' className='w-[90%] bg-gray-700 h-8 outline-0' />
                    </div>
                    <div className='w-[10%] bg-gray-700 flex justify-around items-center ml-16 rounded-xl'>
                        <span className="material-symbols-outlined ml-1 mt-1" style={{ fontSize: "30px" }}>
                            person
                        </span>
                        <h3 className='font-semibold text-lg mr-1 text-white'>{props.user_details.display_name}</h3>
                    </div>
                </div>



                {/* Songs Section */}


                <div className='px-8 py-7 flex flex-wrap'>
                    {song_playlist.playlists.items.map((element) => {
                        return <div className='playlist bg-gray-700 mx-4 my-3 h-64 w-48 hover:bg-gray-500 transition-colors duration-200 justify-center items-center flex flex-col' id={element.id}>

                        <Link to='inplaylist'>
                          <div className='abcd px-2 pt-3 py-9 w-[95%] h-[90%]' id='abc'>
                  
                            <img src={element.images[0].url} alt="" className='m-auto w-[100%] h-[60%] mt-4' />
                  
                            <h3 className='text-white font-normal pt-1 px-1'> {element.name} </h3>
                            <p className='text-sm text-gray-400'>{element.description.slice(0, 40)}...</p>
                  
                          </div>
                        </Link>
                      </div>
                    })}
                </div>

            </div>
        )
    }
}
