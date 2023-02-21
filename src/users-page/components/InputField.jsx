import React, { useState } from 'react'

import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const InputField = ({inputLabel,type,setValue,inputValaue}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);
  


  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
   <FormControl sx={{ height:'20px', width: '80%' }} >
          <InputLabel   
            htmlFor="outlined-adornment" sx={{backgroundColor:'white' }}>{inputLabel}</InputLabel>
          <OutlinedInput
            id="outlined-adornment"
            sx={{ height:'50px', width: '96%',backgroundColor:'white' }}
            type={type==='password'?showPassword?'text':'password':type}
            onChange={setValue}
            value={inputValaue}
            endAdornment={
              <InputAdornment position="start">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                 { type==='password'?showPassword ? <VisibilityOff /> : <Visibility />:''}
                </IconButton>
              </InputAdornment>
            }
            label={inputLabel}
          />
        </FormControl>
  )
}

export default InputField