import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export default class Songcards extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  render() {
    return (
      <div className='bg-gray-700 my-3 h-64 w-48 hover:bg-gray-500 transition-colors duration-200 mx-2 justify-center items-center flex flex-col'>

        <div className='px-2 pt-3 py-9 w-[95%] h-[90%]'>

          <img src="https://th.bing.com/th/id/OIP.o9A22FDuVlB74qPIZfX3RgHaHa?w=178&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className='m-auto w-[100%] h-[95%]' />

          <h3 className='text-white font-normal pt-2 px-1'> {this.props.playlist_name} </h3>
        
        </div>
      </div>
    )
  }
}
