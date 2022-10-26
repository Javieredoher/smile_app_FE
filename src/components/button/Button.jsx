import React from 'react'

function Button({className='' , value= ''}) {
  return (
    <input className={className} type='button' value={value}></input>
  )
}

export default Button