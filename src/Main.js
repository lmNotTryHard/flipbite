import React from 'react'
import './Main.scss'

import FastFood from './pages/FastFood.js'


export default function Main(props) {

  let fastfood = props.data.carousel_posts_Breakfast.map(f => {
    return <FastFood post_url={f.post_url} post_name={f.post_name} />
  })

  return (
    <div className='main'>

      {/* Carousel slider */}
      <div className='carousel-slider'>FEATURED</div>
      <div className='Carousel slide' data-bs-ride="carousel" id="demo">

        <div class="carousel-inner">
          <div class="carousel-item active posts">
            {fastfood}
          </div>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item posts">
            {fastfood}
          </div>
        </div>
      </div>
      
    </div>
  )
}
