import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { set_playlist_id } from './features/store'

export default function Sidebar() {
    const hash_token = useSelector(state => state.hash_token.value)
    const playlist_id = useSelector(state => state.playlist_id.value)
    const [user_playlist, set_playlist] = useState(undefined)
    const dispatch = useDispatch()

    const get_user_playlist = async () => {
        const result = await fetch('https://api.spotify.com/v1/me/playlists', {
            method: 'GET',
            headers: {
                Authorization: 'Bearer  ' + hash_token,
                'Content-type': 'application/json'
            }
        })

        let parsed_data = await result.json()
        set_playlist(parsed_data.items)
    }

    const set_playlist_id = (element) => {
        // dispatch(set_playlist_id(element.id))
        console.log(element)
    }

    useEffect(() => {
        if (user_playlist == undefined) {
            get_user_playlist()

        }
        // console.log(user_playlist)
    })

    if (user_playlist != undefined) {
        return (
            <div className='w-1/6 text-white h-full bg-gradient-to-b from-[#4705a4d6] to-[#0000005d]'>

                <div className='px-5 py-4'>
                    <h1 className='text-3xl font-semibold'>Music Hub</h1>

                    <div className='py-10'>

                        <div className='text-gray-400 py-1 px-2'>

                            <Link to='/Home'>

                                <div className='flex items-center hover:text-white
                             transition-colors duration-300 text-gray-400 py-2'>

                                    <span className="material-symbols-outlined pr-2" style={{ fontSize: "28px" }}>
                                        home
                                    </span>
                                    <h1>Home</h1>

                                </div>
                            </Link>

                            <div className='flex py-2 text-gray-400 items-center hover:text-white
                             transition-colors duration-300'>

                                <span className="material-symbols-outlined pr-1" style={{ fontSize: "30px" }}>
                                    add
                                </span>
                                <h1>Create Playlist</h1>
                            </div>
                            <div className='flex py-2 text-gray-400 items-center hover:text-white
                             transition-colors duration-300'>

                                <span className="material-symbols-outlined pr-2" style={{ fontSize: "30px" }}>
                                    favorite
                                </span>
                                <h1>Liked Songs</h1>
                            </div>

                        </div>

                        <div className='h-[0.1px] mt-3 bg-white w-full'></div>

                        <div className='flex flex-col mt-7 text-gray-400 justify-center'>

                            <div className='flex'>

                                <span className="material-symbols-outlined pr-2" style={{ fontSize: "30px" }}>
                                    bookmarks
                                </span>
                                <h1>Your Library</h1>
                            </div>
                            <div className='mt-6 text-gray-500 text-base'>
                                {user_playlist.map((element) => {
                                    // console.log(element.id)
                                    return <Link to='/Home/inplaylist'>
                                        <p className='cursor-pointer py-1'>{element.name}</p>
                                    </Link>
                                })}
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }



}
