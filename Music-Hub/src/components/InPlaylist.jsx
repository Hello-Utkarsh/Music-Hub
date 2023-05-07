import React, { Component, useEffect } from 'react'
import Song_Cards from './Song_Cards'
import { useSelector } from 'react-redux'

export default function InPlaylist() {
    const token = useSelector(state => state.token.value)
    const hash_token = useSelector(state => state.hash_token.value)
    const playlist_id = useSelector(state => state.playlist_id.value)
    // console.log(playlist_id)


    useEffect(()=>{
        if (playlist_id != undefined) {
            get_playlist()
        }
        
    }, [playlist_id])
    const get_playlist = async() => {
        let result = await fetch(`https://api.spotify.com/v1/playlists/${playlist_id}`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer  ' + hash_token,
                'Content-type': 'application/json'
            }
        })
        let parsed_data = await result.json()
        // console.log(parsed_data)
        // console.log(token)
    }

    

    return (
        <div className='h-full w-5/6'>
            <div className='bg-gray-400 px-8 w-full flex items-end py-16'>
                <img src="https://th.bing.com/th/id/OIP.o9A22FDuVlB74qPIZfX3RgHaHa?w=178&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='h-60' alt="" />
                <div className='flex flex-col pb-5 justify-center px-4'>
                    <h3 className='py-1'>Playlist Name</h3>
                    <h3 className='py-1'>Singers</h3>
                    <h3 className='py-1'>Length of the playlist</h3>
                    <span className="material-symbols-outlined mt-4 cursor-pointer" style={{ fontSize: "30px" }}>
                        bookmarks
                    </span>
                </div>
            </div>
            <div className='bg-white h-[1px] mt-10 mb-2' />
            <div className='py-4'>
                <Song_Cards />
                <Song_Cards />
                <Song_Cards />
                <Song_Cards />
            </div>
        </div>
    )
}
