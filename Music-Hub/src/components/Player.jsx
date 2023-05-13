import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function Player() {
    const played_song = useSelector(state => state.play_song.value)
    const artists = played_song.track.artists.map((element)=>{
        return element.name
    })

    useEffect(()=>{
        console.log()
        
    },[played_song])

    if (played_song != undefined ) {
        return (
            <div className='fixed bottom-0 flex items-center h-24 bg-black text-white w-full'>
    
                <div className='flex items-center h-full w-[23%]'>
                    <img src={played_song.track.album.images[0].url} className='h-16 pl-2' alt="" />
                    <div className='px-2 flex flex-col h-full justify-center'>
                        <h3 className='text-base font-normal'>
                            {played_song.track.name}
                        </h3>
                        <p className='text-sm text-gray-300'>{artists}</p>
                    </div>
                    <span className="material-symbols-outlined pl-4 cursor-pointer" style={{ color: 'white' }} >
                        favorite
                    </span>
                </div>
    
                <div className='w-[30%] text-white h-full m-auto flex flex-col items-center justify-center'>
                    <div className='w-full h-[50%] flex justify-center items-center'>
                        <span className="material-symbols-outlined font-light cursor-pointer mx-3" style={{ fontSize: '28px' }}>
                            arrow_back_ios
                        </span>
                        <span className="material-symbols-outlined font-light cursor-pointer mx-3" style={{ fontSize: '50px' }}>
                            play_arrow
                        </span>
                        <span className="material-symbols-outlined font-light cursor-pointer mx-3" style={{ fontSize: '28px' }}>
                            arrow_forward_ios
                        </span>
                    </div>
                    <div className='h-[50%] '>
    
                        <h3>seekbar</h3>
    
                    </div>
                </div>
    
            </div>
        )
    }
    
}
