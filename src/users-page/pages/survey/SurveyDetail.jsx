import { Box, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sendSurveyAnswer } from '../../../redux/features/authSlice'
import ButtonStyled from '../../components/ButtonStyled'
import NavBar from '../../components/NavBar'
import TextField from '../../components/TextField'
import {toast} from 'react-toastify'
import UploadImage from '../../../shared/Components/UploadImage'
import ChoiceCard from '../../../shared/Components/ChoiceCard'
import MultipleAnswerCard from '../../../shared/Components/MultipleAnswerCard'
import { surveyDetailStyle } from './styles/surveyDetail'

const SurveyDetail = () => {
    const {surveyDetailValue,isLightMode}= useSelector(state=>state.auth) 
    const [isScrolling,setIsScrolling]=useState(false)
    const [surveyAnswer,setSurveyAnswer]= useState([])
    const dispatch = useDispatch()
  

  window.addEventListener('scroll',()=>{
    if(window.pageYOffset>0) setIsScrolling(true)
    else setIsScrolling(false)       
  })


 
 // textField input handler function

   const handleInputTextFieldValue=(e,id,type)=>{
     if(type==='text'){
     let isFound= surveyAnswer.find(data=>(data.questionId===id))===undefined
      if(isFound){
         setSurveyAnswer(
          [...surveyAnswer,
          {"questionId":id,"answer":[e.target.value]}
       ]) 
      }else{
        surveyAnswer.map(question=>{
        if(question.questionId===id){
           return question.answer=[e.target.value]    
      }else return question
    })
  }
}
}

// image input handler function



  const handleSurveyAnswer=()=>{
   if(surveyAnswer.find(data=>data)!==undefined){ 
     
      const userSurveyAnswerData={
        "surveyId":[surveyDetailValue].map(data=>data.id)[0],
        "responses":surveyAnswer
      }
      dispatch(sendSurveyAnswer({userSurveyAnswerData,toast}))
    }else alert('survey answer is needed')
  }


  return (
    <Box sx={surveyDetailStyle.surveyDetailMainContainer}>
      <NavBar isScrolling={isScrolling}/>
      <Box sx={surveyDetailStyle.surveyDetailInnerContainer}>
        <Box sx={surveyDetailStyle.questionDisplayMainContainer}>
          <Paper sx={[surveyDetailStyle.questionDisplayContainer,
              {backgroundColor:isLightMode?'white':'#333'}]}>
             {
              [surveyDetailValue]?.map((data,index)=>
                <Typography key={index} variant='h4' sx={surveyDetailStyle.questionMainTitle}>
                  {data.title}
                  {data?.questions?.map((questions,index)=>
                  <Box sx={{display:'flex',flexDirection:'column',gap:'20px'}}>
                    {questions?.type!=='choice'?
                      <Box sx={{width:'100%',marginTop:'16px'}}>
                      {questions?.type==='text'?
                        <TextField 
                          setValue={(e)=>handleInputTextFieldValue(e,questions?.id,questions.type)} 
                          key={index} 
                          inputValue={surveyAnswer?.answer}
                          questionNumber={index+1} 
                          title={questions.query} 
                        />:
                        <UploadImage
                          key={index}
                          questionNumber={index}
                          title={questions.query}
                          id={questions?.id}
                          type={questions?.type}
                          surveyAnswer={surveyAnswer}
                          setSurveyAnswer={setSurveyAnswer}
                        />
                        }
                       </Box> 
                    :questions.multipleAnswerLimit===1?
                      <ChoiceCard 
                       key={index}
                       index={index}
                       id={questions?.id}
                       type={questions?.type}
                       questions={questions}
                       surveyAnswer={surveyAnswer}
                       setSurveyAnswer={setSurveyAnswer}
                      />:
                     <MultipleAnswerCard 
                       key={index}
                       index={index}
                       id={questions?.id}
                       type={questions?.type}
                       questions={questions}
                       surveyAnswer={surveyAnswer}
                       setSurveyAnswer={setSurveyAnswer}
                      />
                    }
                      
                  </Box>  
                    )
                  }
                </Typography>
              )
             }
             <Box sx={surveyDetailStyle.buttonContainer}>
             <ButtonStyled 
               label={'Submit'} 
               bgColor='#1A6CE8'
               setValue={handleSurveyAnswer}
               />
             </Box>
          </Paper>
          </Box>
      </Box>
    </Box>
  )
}



export default SurveyDetail