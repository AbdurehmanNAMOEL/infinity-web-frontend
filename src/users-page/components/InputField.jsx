import React, { useEffect, useState } from 'react'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Typography } from '@mui/material';
import { 
  validateEmail, 
  validateName, 
  validatePassword, 
  validatePhoneNumber
} from '../../validator/validate';

const InputField = ({inputLabel,type,setValue,inputValue,width,setValidation}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isValid,setValid] = useState(false)
  const [isEmpty,setEmpty] = useState()
  const handleClickShowPassword = () => setShowPassword(show =>!show);
  
const validate = ()=>{
    if(type==='name'){ 
      if(validateName(inputValue)!==''){
         setEmpty(validateName(inputValue))
         setValid(false)    
     }else {
      setValid(true) 
    }     
  }else if(type ==='password'){ 
      if(validatePassword(inputValue)!==''){
         setEmpty(validatePassword(inputValue))
         setValid(false)    
     }else setValid(true)
  }else if(type ==='phoneNumber'){ 
      if(validatePhoneNumber(inputValue)!==''){
         setEmpty(validatePhoneNumber(inputValue))
         setValid(false)      
     }else setValid(true)
  }else if(type ==='email'){ 
      if(validateEmail(inputValue)!==''){
         setEmpty(validateEmail(inputValue))
         setValid(false)      
     }else  setValid(true)
  }
 if(inputValue!==''){
  setValidation(isValid)
}

}

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
 

useEffect(()=>{
  if(inputValue?.length>=1){
    validate()
  } 
  
},[inputValue,isValid])



  return (
   <FormControl sx={{ height:'60px', width: width?width:'80%' }} >
          <InputLabel   
            color={`${isValid && isEmpty?'success':'error'}`}
            htmlFor={inputLabel} 
            sx={{backgroundColor:'white',outline:'none' }}>
             {inputLabel}
            </InputLabel>
          <OutlinedInput
            color={`${isValid && isEmpty? 'success':'error'}`}
            id={inputLabel}
            sx={{ height:'50px', width: '96%',backgroundColor:'white' }}
            type={type==='password'?showPassword?'text':'password':type}
            onChange={setValue}
            value={inputValue}
            required={type==='email'?false:true}
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
             label={inputLabel}
          />
          {!isValid?
           <Typography sx={{
            marginBottom:'20px',
            color:'red',
            fontSize:'12px',
            fontWeight:'bolder',
            marginTop:'8px'
            }}>{isEmpty}</Typography>:null}
        </FormControl>
  )
}

export default InputField