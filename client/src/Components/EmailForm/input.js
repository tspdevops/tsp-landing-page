import React from 'react'
import { InputBase } from '@material-ui/core'


const CssInput = ({value, type, handleChange, pholder}) => {

  return (
    <div>
       <InputBase
        autoComplete='off'
        style={{
          marginTop:10,
          marginBottom: 10,
          backgroundColor: '#767676',
          border:'none',
          borderRadius: 30,
          width: 259,
          height: 27,
          padding:10,
          color:'black',
          
        }}
        onChange={handleChange}
        type={type}
        name={type}
        value={value}
        autoFocus={false}
        placeholder={pholder}
        />
    </div>
  )
}

export default CssInput
