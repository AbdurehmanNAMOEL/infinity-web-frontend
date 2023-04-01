import { pattern } from "./patternVerifier"

export const validateName=(inputValue)=>{
    if(inputValue ==='') return "name can't  be empty"
    if(inputValue.length<2) return 'name length must be at least 2'
    if(!pattern['name'].test(inputValue)) return 'name must be a text'
    else return ''
} 

export const validatePassword=(inputValue)=>{
    if(inputValue ==='') return "password can't  be empty"
    if(inputValue.length<8) return 'password length must be at least 8 and max 15'
    if(!pattern['password'].test(inputValue)) return 'password must include capital and small letter,symbol,number '
    else return ''
} 

export const validatePhoneNumber=(inputValue)=>{
    if(inputValue ==='') return "phoneNumber can't  be empty"
    if(inputValue.length<10) return 'phoneNumber length must be at least 10'
    if(!pattern['phoneNumber'].test(inputValue)) return 'insert the right ethiopian phoneNumber'
    else return ''
} 

export const validateEmail=(inputValue)=>{
    if(inputValue ==='') return "email can't  be empty"
    if(inputValue.length<11) return 'email length must be at least 11'
    if(!pattern['email'].test(inputValue)) return ' email must be like helen1@gmail.com '
    else return ''
} 
export const validateText=(inputValue)=>{
    if(inputValue ==='') return "text can't  be empty"
    if(inputValue.length<4) return 'text length must be at least 4'
    if(!pattern['text'].test(inputValue)) return 'text input required'
    else return ''
} 


  