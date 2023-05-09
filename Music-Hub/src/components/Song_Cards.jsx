import React, { Component } from 'react'

export default class Song_Cards extends Component {
  render() {
    return (
      <div className='bg-black w-full py-3 rounded-lg h-14 flex items-center'>
        <div className='w-[30%] flex items-center px-[9px]'>
          <h3 className='px-1 text-white'>1</h3>
          <img src={this.props.img} className='h-10 px-[9px]' alt="" />
          <div className='px-[9px]'>
            <h2 className='text-gray-200 text-[17px]'>{this.props.name}</h2>
            <p className='text-gray-400 text-[15px]'>{this.props.artist}</p>
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
}
