import React, { Component } from 'react'

export default class Playlist_Cards extends Component {
  
  render() {
    return (
      <div className='bg-gray-700 mx-4 my-3 h-64 w-48 hover:bg-gray-500 transition-colors duration-200 justify-center items-center flex flex-col'>

        <div className='px-2 pt-3 py-9 w-[95%] h-[90%]'>

          <img src={this.props.playlist_img} alt="" className='m-auto w-[100%] h-[95%]' />

          <h3 className='text-white font-normal pt-2 px-1'> {this.props.playlist_name} </h3>
        
        </div>
      </div>
    )
  }
}
