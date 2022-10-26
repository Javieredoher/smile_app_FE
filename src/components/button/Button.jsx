import React from 'react'

function Button({value= '', className=""}) {
  return (
    <input type='button' value={value} className={className}></input>
  )
}

export default Button