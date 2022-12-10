import React from 'react'
//export default function Input({value = '', type = 'text', placeholder = '', name = '', label = ''}) {
//Se retira el atributo value, se debe reinstaurar cuando se haga la funcionalidad

export default function Input({className='', type = 'text', placeholder = '', name = '  ', label = '', readOnly=''}) {
  return (
    
    <>
      <input
        className={className}
        type={type}
        placeholder={placeholder}
        //value={value}
        name={name}
        label={label}
        readOnly={readOnly}
        />
    </>
  )
}