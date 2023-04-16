import { Box, Paper, Typography } from '@mui/material'
import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sendSurveyAnswer } from '../../../redux/features/authSlice'
import { handleResponsiveness } from '../../auth/styles/loginStyle'
import ButtonStyled from '../../components/ButtonStyled'
import NavBar from '../../components/NavBar'
import RadioInput from '../../../shared/Components/RadioInput'
import TextField from '../../components/TextField'
import {toast} from 'react-toastify'
import UploadImage from '../../../shared/Components/UploadImage'
import ChoiceCard from '../../../shared/Components/ChoiceCard'
import MultipleAnswerCard from '../../../shared/Components/MultipleAnswerCard'

const SurveyDetail = () => {
  
    const [answerCount,setAnswerCount]=useState(4)
    const [isScrolling,setIsScrolling]=useState(false)
    const [surveyAnswer,setSurveyAnswer]= useState([])
    const [surveyChoiceAnswer,setSurveyChoiceAnswer]= useState([])
    const [surveyImageAnswer,setSurveyImageAnswer]=useState([])
    const [imageUrl,setImageUrl]=useState({})
    const [userData,setUserData]= useState([])
    const dispatch = useDispatch()

    const {surveyDetailValue,isLightMode}= useSelector(state=>state.auth) 

    useEffect(()=>{
     setUserData(JSON.parse(localStorage.getItem("user")))
    },[])


  window.addEventListener('scroll',()=>{
    if(window.pageYOffset>0) setIsScrolling(true)
    else setIsScrolling(false)       
  })

  // choice input handler function logic

 
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

 useEffect(()=>{
      console.log(surveyAnswer,'surveyAnswer')
  
    },[surveyAnswer,imageUrl,answerCount])

    
  
  const responseData=()=>{
    return{
      surveyAnswer,surveyChoiceAnswer,surveyImageAnswer,
      "questionId":surveyDetailValue.map(data=>data.id)[0]
    }
  }


  console.log(surveyDetailValue);

  
  return (
    <Box sx={{width:'100%',height:'100vh',display:'flex',flexDirection:'column',alignItems:'center'}}>
      <NavBar isScrolling={isScrolling}/>
      <Box sx={{width:'100%',height:'auto',display:'flex',justifyContent:'center',marginTop:'80px'}}>
        <Box sx={style.questionDisplayMainContainer}>
          <Paper sx={[style.questionDisplayContainer,
              {backgroundColor:isLightMode?'white':'#333'}]}>
             {
              [surveyDetailValue]?.map((data,index)=>
                <Typography key={index} variant='h4' sx={style.questionMainTitle}>
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
             <Box sx={style.buttonContainer}>
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

const style={
  questionDisplayMainContainer:{
   width:handleResponsiveness('100%','70%'),
    height:'500px',
    overflowY:'scroll',
    border:'solid 1px rgba(0,0,0,0.2)',
    borderRadius:'10px',
    marginTop:'30px'

  },
  questionDisplayContainer:{ 
    width:'100%',
    height:'auto',
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
  
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

export default SurveyDetail