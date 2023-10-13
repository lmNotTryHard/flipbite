import React from 'react'
import './Main.scss'

import BreakFast from './pages/BreakFast.js'


export default function Main(props) {

  let breakfast = props.data.carousel_posts_Breakfast.map(f => {
    return <BreakFast post_url={f.post_url} post_name={f.post_name} />
  })

  return (
    <div className='main'>

      {/* Carousel slider */}
      <div className='carousel-slider'>FEATURED</div>
      <div className='Carousel slide' data-bs-ride="carousel" id="demo">

        <div class="carousel-inner">
          <div class="carousel-item active posts">
            {breakfast}
          </div>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item posts">
            {breakfast}
          </div>
        </div>
      </div>
      
    </div>
  )
}
