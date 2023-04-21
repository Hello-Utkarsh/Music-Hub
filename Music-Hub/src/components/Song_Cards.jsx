import React, { Component } from 'react'

export default class Song_Cards extends Component {
  render() {
    return (
      <div className='bg-black w-full rounded-lg h-14 flex items-center'>
        <div className='w-[30%] flex items-center px-[9px]'>
            <h3 className='px-1 text-white'>1</h3>
            <img src="https://th.bing.com/th/id/OIP.o9A22FDuVlB74qPIZfX3RgHaHa?w=178&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='h-10 px-[9px]' alt="" />
            <div className='px-[9px]'>
                <h2 className='text-gray-200 text-[17px]'>Blinding Lights</h2>
                <p className='text-gray-400 text-[15px]'>Weeknd</p>
            </div>
        </div>
        <div className='flex items-center'>
            <h3 className='text-gray-400'>Blinding Lights</h3>
        </div>
      </div>
    )
  }
}
