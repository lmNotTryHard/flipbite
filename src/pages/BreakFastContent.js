import React from 'react'

export default function BreakFastContent(props) {

    return (
          <div className='card'>
            <img src={props.card_url} />
            <div className='card-content'>
              <div>{props.card_name}</div>
            </div>
          </div>
    )
}
