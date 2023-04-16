import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { handleResponsiveness } from '../../users-page/auth/styles/loginStyle'
import './style/radioButtonStyle.css'
import { useSelector } from 'react-redux'

const CheckBoxInput = ({id,type,title,optionValue,data,choice,setValue,surveyAnswer,setSurveyAnswer}) => {

    const {isLightMode}= useSelector(state=>state.auth)
    const [checkedValue,setCheckedValue]= useState(false)
    

    const handleInputValue=(e)=>{
      console.log(e.target)
      let isFound = surveyAnswer.find(data=>(data.questionId===e.target.id))===undefined
      setCheckedValue(prev=>!prev)
       if(type){
       if(isFound){
          setSurveyAnswer([...surveyAnswer,{"questionId":e.target.id,"answer":[e.target.value]}])
        }
        else{
           surveyAnswer?.map(data=>{
              if(data.answer.find(data=>data===e.target.value)===undefined
                &&data.questionId===e.target.id){
               return data.answer=[...data.answer,e.target.value]
            }else return data.answer=data.answer.filter(data=>data!==e.target.value)

      })   
      }
    }
    console.log(surveyAnswer)
  }

useEffect(()=>{

},[checkedValue])

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
         checked={checkedValue}
         value={choice} 
         onChange={handleInputValue} 
         type='checkbox' 
         title={id}
         id={id}
         style={{width:'15px',height:'15px',marginLeft:'16px'}}/>
       {choice}
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
export default CheckBoxInput