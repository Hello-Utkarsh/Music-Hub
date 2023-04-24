import React, { Component } from 'react'
import Song_Cards from './Song_Cards'

export default class Liked_playlist extends Component {
    render() {
        return (
            <div className='h-full w-5/6'>
                <div className='bg-gray-400 px-8 w-full flex items-end py-16'>
                    <div className='h-60 w-60 bg-gradient-to-b from-blue-700 to-purple-400 flex justify-center items-center'>
                        <span class="material-symbols-outlined" style={{ color: 'white', fontSize: '110px' }} >
                            favorite
                        </span>
                    </div>
                    <div className='flex flex-col pb-5 justify-center px-4'>
                        <h3 className='py-1'>Liked Songs</h3>
                        <h3 className='py-1'>Utkarsh</h3>
                        {/* <h3 className='py-1'>Length of the playlist</h3> */}
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
}
