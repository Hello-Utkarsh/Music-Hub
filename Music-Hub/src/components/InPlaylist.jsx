import React, { Component, useEffect, useState } from 'react'
import Song_Cards from './Song_Cards'
import { useSelector } from 'react-redux'

export default function InPlaylist() {
    const hash_token = useSelector(state => state.hash_token.value)
    const playlist_id = useSelector(state => state.playlist_id.value)
    const [playlist, set_playlist] = useState([])
    const [playlist_detail, set_detail] = useState([])

    

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
        set_detail(parsed_data)
        set_playlist(parsed_data.tracks.items)
    }

    

    return (
        <div className='h-full w-full bg-gradient-to-b from-[#4705a4d6] to-[#0000005d]'>
            <div className=' px-8 w-full flex items-end py-16'>
                <img src="https://th.bing.com/th/id/OIP.o9A22FDuVlB74qPIZfX3RgHaHa?w=178&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='h-60' alt="" />
                <div className='flex flex-col pb-5 justify-center px-4 text-gray-300'>
                    <h3 className='py-1'>{playlist_detail.name}</h3>
                    <h3 className='py-1'>{playlist_detail.owner ? playlist_detail.owner.display_name : 'Not Available'}</h3>
                    <h3 className='py-1'>Length of the playlist: {playlist.length}</h3>
                    <span className="material-symbols-outlined mt-4 cursor-pointer" style={{ fontSize: "30px" }}>
                        bookmarks
                    </span>
                </div>
            </div>
            <div className='bg-white h-[1px] mt-10 mb-2' />
            {playlist ? <div className='py-4'>
                {playlist.map((element)=>{
                    return <Song_Cards element = {element} artist = {element.track.artists ? element.track.artists[0].name : "Unavailable"} name = {element.track.name ? element.track.name : 'Unavailable'} img={element.track.album.images[1] ? element.track.album.images[1].url : ""}/>
                })}
                </div> : <div className='py-4'></div>}
        </div>
    )
}
