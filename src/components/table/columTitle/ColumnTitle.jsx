import React from 'react'

function ColumnTitle({value='', className=''}) {
  return (
    <th className={className}>{value} </th>
  )
}

export default ColumnTitle