import { Select } from '@mui/material'
import React, { useEffect } from 'react'

const InputSelector = ({optionList,setValue,inputValue}) => {

  useEffect(()=>{},[inputValue])  
  return (
    <select 
      onChange={(e)=>setValue(e.target.value)}
      value={inputValue} 
      style={style.selectStyle}>{optionList?.map((item,index)=>
      <option 
      key={index} 
      value={item.value}>{item.title}</option>    
    )}   
    </select>
  )
}

const style={
  selectStyle:{
    width:'200px',
    height:'30px',
    textIndent:'10px'   
}
}
export default InputSelector