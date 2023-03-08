import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useEffect } from 'react'

const InputSelector = ({optionList,setValue,inputValue,label}) => {

  useEffect(()=>{},[inputValue])  
  return (
    
  
    <Box sx={{ width: 120}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
         sx={{height:'45px' }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={inputValue}
          label={label}
          onChange={(e)=>setValue(e.target.value)}
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
    height:'30px',
    textIndent:'10px'   
}
}
export default InputSelector