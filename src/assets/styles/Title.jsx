import React from 'react'

function Title({value='', className=""}) {
  return (
    <h1 className={className}>{value}</h1>
  )
}
export default Title