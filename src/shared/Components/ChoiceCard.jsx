import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { handleResponsiveness } from '../../users-page/auth/styles/loginStyle'
import { useSelector } from 'react-redux'

const ChoiceCard = ({index,questions,surveyAnswer,type,setSurveyAnswer,id}) => {
    const {isLightMode} = useSelector(state=>state.auth)
    const [checkedValue,setCheckedValue]= useState('')
    

  const handleInputValue=(e)=>{
      let isFound = surveyAnswer.find(data=>data.questionId===id)===undefined
      setCheckedValue(e.target.value)
      console.log(surveyAnswer.find(data=>data.questionId===id)===undefined);
       if(type==='choice'){
       if(isFound){
       
           setSurveyAnswer([...surveyAnswer,
            {"questionId":id,"answer":[e.target.value]}
          ])
        }else{
           surveyAnswer?.map(data=>{
            if(data.questionId===id){      
               return data.answer =[e.target.value]
            }else return data
         })
      }
    }
        
  }
   useEffect(()=>{
    console.log(surveyAnswer)
    },[surveyAnswer,checkedValue])
    
  return (
    <>
 {questions?.type==="choice"?
  <Box sx={{display:'flex',width:'100%',flexDirection:'column',gap:'20px',marginTop:'20px'}}>
   <Box sx={{width:'100%',display:'flex',gap:'8px',color:'#1e1e1e',alignItems:'center'}}>
     <label style={{fontSize:'16px',color:isLightMode?'#1e1e1e':'white'}}>{`${index+1}.`}</label>
     <Typography sx={{fontSize:handleResponsiveness('14px','16px'),color:isLightMode?'#1e1e1e':'white'}}>
        {questions.query}
     </Typography>
     </Box>
    <Box sx={{ width:handleResponsiveness('auto','350px'),display:'flex',flexDirection:'column',
            marginLeft:handleResponsiveness('0px','20px')}}>
    {questions?.options?.map((item,index)=>
      <button 
        className='radioButtonContainer'
        onClick={handleInputValue}  
        id={id}
        title={item}
        value={item}
        style={{width:handleResponsiveness('auto','350px'),
         height:'40px',backgroundColor:isLightMode?'white':'#1e1e1e',
         display:'flex',justifyContent:'flex-start',alignItems:'center',
         gap:'8px',marginBottom:'16px',
         cursor:'pointer',
         color:isLightMode?'#1e1e1e':'white',
       }}>
        <input 
         checked={checkedValue===item}
         value={item} 
         type='radio' 
         title={id}
         style={{width:'15px',height:'15px',marginLeft:'16px'}}/>
        <label style={{fontSize:'12px'}} htmlFor={id}>
          {item}
        </label>
    </button>
    )} 
  </Box>
    </Box>:null}
    </>
  )
}

export default ChoiceCard