import React, { useEffect, useState } from 'react'

import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Typography } from '@mui/material';
import { pattern } from '../../validator/patternVerifier';

const InputField = ({inputLabel,type,setValue,inputValue,width}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [newInputLabel, setNewInputLabel] = useState(inputLabel);
  const [isValid,setValid] = useState(false)
  const [isEmpity,setEmpty] = useState()
  const handleClickShowPassword = () => setShowPassword(show =>!show);
  
const validate = (field,regex)=>{
  
    if(regex.test(field)){
         setValid(true)
         setEmpty('')
          setNewInputLabel(inputLabel)
   }else {
     if(field !== ''){
        setEmpty('invalid Input')
        setNewInputLabel('Invalid Input')
      }else if(field===''){
        setEmpty('input is required')
        
      }
    setValid(false)
  }
  }
  

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
 

useEffect(()=>{
    validate(inputValue,pattern[type])
},[inputValue,inputLabel,type,newInputLabel,])

  return (
   <FormControl sx={{ height:'auto', width: width?width:'80%' }} >
          <InputLabel   
            color={`${isValid && !isEmpity?'success':'error'}`}
            htmlFor={inputLabel} 
            sx={{backgroundColor:'white',outline:'none' }}>
             {inputLabel?newInputLabel:''}
            </InputLabel>
          <OutlinedInput
            color={`${isValid&&!isEmpity? 'success':'error'}`}
            id={inputLabel}
            sx={{ height:'50px', width: '96%',backgroundColor:'white' }}
            type={type==='password'?showPassword?'text':'password':type}
            onChange={setValue}
            value={inputValue}
            endAdornment={
              <InputAdornment position="start">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                 { type==='password'?!showPassword?<VisibilityOff /> : <Visibility />:''}
                </IconButton>
              </InputAdornment>
            }
             label={inputLabel?inputLabel:null}
          />
          {!isValid&&!inputLabel?<Typography sx={{marginBottom:'20px',color:'red' }}>{isEmpity}</Typography>:null}
        </FormControl>
  )
}

export default InputField