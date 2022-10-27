import React from 'react'

function InfoField({value='', className=''}) {
  return (
    <>
        <p
        className={className}
        >
        {value}
        </p>
    </>
  )
}

export default InfoField