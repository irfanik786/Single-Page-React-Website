import React from 'react'

const Box = (props) => {
  return (
    <div className='s-box'>
        <div className="s-b-img">
            <img src={props.image} alt={props.alte} />
        </div>
        <div className="s-b-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit perferendis odit minima reprehenderit vero fuga deserunt laudantium asperiores officia amet?</p>
            <a href="#" className='cv-btn'>{props.button}</a>
        </div>
    </div>
  )
}

export default Box