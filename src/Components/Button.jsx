import React from 'react'
import { Link } from 'react-router-dom'

function Button(props) {
  return (
    <div>
        <Link to={props.route}>
           <button className='routesBtns' onClick={props.onClick}>{props.text}</button>
        </Link>
    </div>
  )
}

export default Button
