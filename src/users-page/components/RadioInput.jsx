import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { handleResponsiveness } from '../auth/styles/loginStyle'
import './style/radioButtonStyle.css'
import { useSelector } from 'react-redux'
const RadioInput = ({id,title,checkedValue,setCheckedValue,optionValue,data,choice,setValue,surveyAnswer,setSurveyAnswer}) => {
    const [change,setChange]=useState('')
    const {isLightMode}= useSelector(state=>state.auth)


    const handleInputValue=(e)=>{
      let isFound= surveyAnswer.find(data=>(data.query===e.target.title))===undefined
      setCheckedValue(e.target.value)
      if(isFound){
           setSurveyAnswer([...surveyAnswer,{"query":e.target.title,"answer":e.target.value}])
        }else{
           surveyAnswer?.map(data=>{
            if(data.query===e.target.title){
               return data.answer = e.target.value
            }else return data
            
          })
      }
  }
 
    useEffect(()=>{
      console.log(surveyAnswer)
    },[id,surveyAnswer,checkedValue])
  return (
    <>
    <button 
      className='radioButtonContainer'
      onClick={handleInputValue}  
      id={id}
      title={title}
      value={choice}
      style={{width:handleResponsiveness('auto','350px'),
       height:'40px',backgroundColor:isLightMode?'white':'#1e1e1e',
       display:'flex',justifyContent:'flex-start',alignItems:'center',
       gap:'8px',marginBottom:'16px',
       cursor:'pointer',
       color:isLightMode?'#1e1e1e':'white',
      }}>
        <input 
         checked={checkedValue===id}
         value={choice} 
         onChange={handleInputValue} 
         type='radio' 
         title={id}
         id={optionValue}
         style={{width:'15px',height:'15px',marginLeft:'16px'}}/>
        <label 
          style={{fontSize:'12px'}} 
          htmlFor={id}>{choice}</label>
    </button>
    </>
  )
}

const style={
    radioInputContainer:{
      width:'350px',
      height:'40px',
      backgroundColor:'white',
      display:'flex',
      justifyContent:'flex-start',
      alignItems:'center',
      gap:'8px',
      borderRadius:'10px',
      marginBottom:'16px',
      cursor:'pointer'
    }
    
}
export default RadioInput