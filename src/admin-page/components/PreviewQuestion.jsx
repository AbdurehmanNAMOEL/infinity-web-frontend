import { Box, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import TextField from '../../users-page/components/TextField'
import UploadImage from '../../shared/Components/UploadImage'
import ChoiceCard from '../../shared/Components/ChoiceCard'
import MultipleAnswerCard from '../../shared/Components/MultipleAnswerCard'
import ButtonStyled from '../../users-page/components/ButtonStyled'
import { handleResponsiveness } from '../../users-page/auth/styles/loginStyle'

const PreviewQuestion = ({surveyQuestion,setIsQuestionPreviewed}) => {
    const [answerCount,setAnswerCount]= useState(2)
    console.log(surveyQuestion);
  return (
     <Box sx={{width:'100%',height:'auto',display:'flex',justifyContent:'center',marginTop:'80px'}}>
        <Box sx={style.questionDisplayMainContainer}>
          <Paper sx={[style.questionDisplayContainer]}>
                <Typography variant='h4' sx={style.questionMainTitle}>
                  {surveyQuestion.title}
                  {surveyQuestion?.map((questions,index)=>
                  <Box sx={{display:'flex',flexDirection:'column',gap:'20px'}}>
                    {questions?.type!=='choice'?
                      <Box sx={{width:'100%',marginTop:'16px'}}>
                      {questions?.type==='text'?
                        <TextField  
                          key={index} 
                          inputValue={surveyQuestion?.answer}
                          questionNumber={index+1} 
                          title={questions.query} 
                        />:
                        <UploadImage
                          key={index}
                          questionNumber={index}
                          title={questions.query}
                          
                        />
                        }
                       </Box> 
                    :answerCount>1?
                      <ChoiceCard 
                       key={index}
                       index={index}
                       questions={questions}
                      
                      />:
                     <MultipleAnswerCard 
                       key={index}
                       index={index}
                       questions={questions}
                      
                      />
                    }
                      
                  </Box>  
                    )
                  }
                </Typography>
             <Box sx={style.buttonContainer}>
             <ButtonStyled 
               label={'ok'} 
               bgColor='#1A6CE8'
               setValue={()=>setIsQuestionPreviewed(false)}
               />
             </Box>
          </Paper>
          </Box>
      </Box>
  )
}


const style={
  questionDisplayMainContainer:{
   width:handleResponsiveness('100%','70%'),
    height:'500px',
    overflowY:'scroll',
    border:'solid 1px rgba(0,0,0,0.2)',
    borderRadius:'10px',
    backgroundColor:'white'

  },
  questionDisplayContainer:{ 
    width:'100%',
    height:'auto',
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    boxShadow:'none'
  
  },
  questionMainTitle:{
    color:'#1A6CE8',
    padding:'40px',
    marginTop:'20px',
    display:'flex',
    flexDirection:'column'
  },
  buttonContainer:{
    width:'100%',
    display:'flex',
    justifyContent:'center',
    marginBottom:'20px'}
}
export default PreviewQuestion