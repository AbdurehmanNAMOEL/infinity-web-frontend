import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const InputSelector = ({optionList,optionValue,optionTitle,selectorWidth,setValue,inputValue,label}) => {
   
  const {modeColor,isLightMode}= useSelector(state=>state.auth)

  return (
    
  
    <Box sx={{ width:selectorWidth?selectorWidth:'120px'}}>
      <FormControl fullWidth sx={{ backgroundColor:'white'}}>
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
             value={item[`${optionValue}`]}>
              {item[optionTitle]}
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