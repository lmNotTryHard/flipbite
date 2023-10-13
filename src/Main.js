import React from 'react'
import './Main.scss'
import './pages/css.css'

import BreakFast from './pages/BreakFast.js'
import BreakFastContent from './pages/BreakFastContent'



export default function Main(props) {

  // props
  let breakfast_carousel = props.data.carousel_posts_Breakfast.map(f => {
    return <BreakFast post_url={f.post_url} post_name={f.post_name} />
  })
  let breakfast_cards = props.data.cards_Breakfast.map(t => {
    return <BreakFastContent card_url={t.card_url} card_name={t.card_name} />
  })


  return (
    <div className='main'>

      {/* Carousel slider */}
      <div className='carousel-slider'>FEATURED</div>
      <div className='Carousel slide' data-bs-ride="carousel" id="demo">

        <div className="carousel-inner">
          <div className="carousel-item active posts">
            {breakfast_carousel}
          </div>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item posts">
            {breakfast_carousel}
          </div>
        </div>
      </div>


      <div className='categories'>
        <h1 className='heading'>
          Focus on diet Quality
          Healthy plate, Healthy life
        </h1>
        <div className='categories_content'>
          <iframe height="700" width="850px" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d163198.94378288763!2d57.028640021018965!3d50.27356675480136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4182214bb81c89f9%3A0xffe03f81724c7c2d!2z0JDQutGC0L7QsdC1!5e0!3m2!1sru!2skz!4v1697207241160!5m2!1sru!2skz" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <div className='cards'>
            {breakfast_cards}
          </div>
        </div>
      </div>

    </div>
  )
}
