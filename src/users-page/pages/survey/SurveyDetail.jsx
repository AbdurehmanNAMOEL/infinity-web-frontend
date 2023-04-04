import { Box, Paper, Typography } from '@mui/material'
import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sendSurveyAnswer } from '../../../redux/features/authSlice'
import { handleResponsiveness } from '../../auth/styles/loginStyle'
import ButtonStyled from '../../components/ButtonStyled'
import NavBar from '../../components/NavBar'
import RadioInput from '../../components/RadioInput'
import TextField from '../../components/TextField'
import {toast} from 'react-toastify'
import UploadImage from '../../../shared/Components/UploadImage'
const SurveyDetail = () => {
  
    const [isScrolling,setIsScrolling]=useState(false)
    const [surveyAnswer,setSurveyAnswer]= useState([])
    const [surveyAnswer2,setSurveyAnswer2]= useState([])
    const [surveyFinalAnswer,setSurveyFinalAnswer]=useState([])
    const [imageUrl,setImageUrl]=useState({})
    const [choiceAnswer,setChoiceAnswer]= useState('')
    const [checkedValue,setCheckedValue]= useState('')
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

   const handleInputTextFieldValue=(e,id)=>{
     let isFound= surveyAnswer.find(data=>(data.query===e.target.title))===undefined
      if(isFound){
         setSurveyAnswer(
          [...surveyAnswer,
          {"query":e.target.title,"answer":e.target.value}
       ]) 
      }else{
        surveyAnswer.map(question=>{
        if(question.query===e.target.title){
           return question.answer=e.target.value    
      }else return question
    })
  }
}

// image input handler function



  const handleSurveyAnswer=()=>{
   if(surveyAnswer.find(data=>data)!==undefined){ 
     
      const userSurveyAnswerData={
        "surveyId": "123gg5",
        "responses": [responseData()]
      }

      console.log(userSurveyAnswerData);
      dispatch(sendSurveyAnswer({userSurveyAnswerData,toast}))
    }else alert('survey answer is needed')

  
  }

 useEffect(()=>{
      console.log(surveyAnswer,'surveyAnswer')
  
    },[surveyAnswer,imageUrl])

    
  
  const responseData=()=>{
          return{
            "answer":surveyAnswer.map(data=>data.answer),
            "questionId":`333333333333333`
    }
  }


  //   const visibleTodos = useMemo(
  //  handleSurveyAnswer(),
  //   [surveyAnswer, surveyAnswer2]
  // );

  // console.log(visibleTodos);

  return (
    <Box sx={{width:'100%',height:'100vh',display:'flex',flexDirection:'column',alignItems:'center'}}>
      <NavBar isScrolling={isScrolling}/>
      <Box sx={{width:'100%',height:'auto',display:'flex',justifyContent:'center',marginTop:'80px'}}>
        <Box sx={style.questionDisplayMainContainer}>
          <Paper sx={[style.questionDisplayContainer,
              {backgroundColor:isLightMode?'white':'#333'}]}>
             {
              surveyDetailValue?.map((data,index)=>
                <Typography key={index} variant='h4' sx={style.questionMainTitle}>
                  {'Educational'}
                  {data?.map((questions,index)=>
                  <Box sx={{display:'flex',flexDirection:'column',gap:'20px'}}>
                    {questions?.type!=='choice'?
                      <Box sx={{width:'100%',marginTop:'16px'}}>
                      {questions?.type==='text'?
                        <TextField 
                          setValue={(e)=>handleInputTextFieldValue(e,questions?.query)} 
                          key={index} 
                          inputValue={surveyAnswer?.answer}
                          questionNumber={index+1} 
                          title={questions.query} 
                        />:
                        <UploadImage
                          key={index}
                          questionNumber={index}
                          title={questions.query}
                          surveyAnswer={surveyAnswer}
                          setSurveyAnswer={setSurveyAnswer}
                        />
                        }
                       </Box> 
                    :<Box sx={{display:'flex',width:'100%',flexDirection:'column',gap:'20px',marginTop:'20px'}}>
                      {<Box sx={{width:'100%',display:'flex',gap:'8px',color:'#1e1e1e',alignItems:'center'}}>
                        <label style={{fontSize:'16px',color:isLightMode?'#1e1e1e':'white'}}>{`${index+1}.`}</label>
                          <Typography sx={{fontSize:handleResponsiveness('14px','16px'),
                            color:isLightMode?'#1e1e1e':'white'}}
                            >{questions.query}</Typography>
                          </Box>
                          }
                         <Box sx={
                          { width:handleResponsiveness('auto','350px'),
                           display:'flex',
                           flexDirection:'column',
                           marginLeft:handleResponsiveness('0px','20px')}}>
                            
                           
                            {  questions?.options?.map((item,index)=>
                                <RadioInput 
                                    key={item}  
                                    id={item} 
                                    checkedValue={checkedValue}
                                    setCheckedValue={setCheckedValue}
                                    surveyAnswer={surveyAnswer}
                                    setSurveyAnswer={setSurveyAnswer}
                                    choice={item}
                                    title={questions.query}
                                   
                                  />)
                            } 
                         </Box>
                      </Box>}
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