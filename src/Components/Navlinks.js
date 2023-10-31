import React from 'react'

const Navlinks = (props) => {
  return (
    <div className="flex flex-row justify-center">
    <a href="www.google.com">{props.navlink}</a>
 
  </div>
  )
}

export default Navlinks