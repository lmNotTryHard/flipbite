import React from 'react'

export default function FastFood(props) {

  return (
    <div className='post'>
      <img src={props.post_url} />
      <div className='post-content'>
        <div className='post-title'>
          <div className='post-name'>{props.post_name}</div>
          <div className='post-add-to_cart'><span class="material-symbols-outlined">add_shopping_cart</span>Add to Cart</div>
        </div>
      </div>
    </div>
  )
}