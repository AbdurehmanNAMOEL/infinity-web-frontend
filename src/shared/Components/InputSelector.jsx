import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useEffect } from 'react'

const InputSelector = ({optionList,selectorWidth,setValue,inputValue,label}) => {

  useEffect(()=>{},[inputValue])  
  return (
    
  
    <Box sx={{ width:selectorWidth?selectorWidth:'120px'}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
         sx={{height:'50px' }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={inputValue}
          label={label}
          onChange={setValue}
        >
         { optionList?.map((item,index)=>
           <MenuItem 
             value={item.value}>
              {item.title}
            </MenuItem>)
          }
        </Select>
      </FormControl>
    </Box>
   
  )
}

const style={
  selectStyle:{
    width:'200px',
    height:'50px',
    textIndent:'10px'   
}
}
export default InputSelector