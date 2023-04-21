import { Box, Typography } from '@mui/material'
import React from 'react'
import { handleResponsiveness } from '../../users-page/auth/styles/loginStyle'
import { useSelector } from 'react-redux'
import CheckBoxInput from './CheckBoxInput'

const MultipleAnswerCard = ({index,type,questions,surveyAnswer,setSurveyAnswer,id}) => {
    const {isLightMode} = useSelector(state=>state.auth)
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
            <CheckBoxInput 
              key={item}  
              id={id} 
              type={type}
              surveyAnswer={surveyAnswer}
              setSurveyAnswer={setSurveyAnswer}
              choice={item}
              title={questions.query}
            />)} 
        </Box>
    </Box>:null}
    </>
  )
}

export default MultipleAnswerCard