import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useEffect } from 'react'

const SelectorInput = ({optionList,selectorWidth,setValue,inputValue,label}) => {

  useEffect(()=>{},[inputValue])  
  return (
    
    <Box sx={{ width:selectorWidth?selectorWidth:'120px'}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
         sx={{height:'45px' }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={inputValue}
          label={label}
          onChange={setValue}
        >
         { optionList?.map((item,index)=>
           <MenuItem 
             value={item.id}>
              {item.en}
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
export default SelectorInput