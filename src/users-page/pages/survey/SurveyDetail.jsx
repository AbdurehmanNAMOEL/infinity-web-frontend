import { Box, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { sendSurveyAnswer } from '../../../redux/features/authSlice'
import { handleResponsiveness } from '../../auth/styles/loginStyle'
import ButtonStyled from '../../components/ButtonStyled'
import NavBar from '../../components/NavBar'
import RadioInput from '../../components/RadioInput'
import TextField from '../../components/TextField'
import {toast} from 'react-toastify'
const SurveyDetail = ({surveyData}) => {
  console.log(surveyData);
    const [isScrolling,setIsScrolling]=useState(false)
    const [surveyAnswer,setSurveyAnswer]= useState([])
    const [surveyAnswer2,setSurveyAnswer2]= useState([])
    const [surveyFinalAnswer,setSurveyFinalAnswer]=useState([])
    const [choiceAnswer,setChoiceAnswer]= useState('')
    const [checkedValue,setCheckedValue]= useState('')
  
    const [userData,setUserData]= useState([])
    const dispatch = useDispatch()
    useEffect(()=>{
    setUserData(JSON.parse(localStorage.getItem("user")))
  },[])


  window.addEventListener('scroll',()=>{
    if(window.pageYOffset>0) setIsScrolling(true)
    else setIsScrolling(false)       
  })

  const handleInputField=(e,id)=>{
      let isFound= surveyAnswer.find(data=>(data.questionTitle===e.target.title))===undefined
      if(isFound){
        setSurveyAnswer(
          [...surveyAnswer,
          {'id':id,"query":e.target.title,"answer":e.target.value}
        ])
      }else{
        surveyAnswer.map(question=>{
        if(question.questionTitle===e.target.title){
          return question.answer=e.target.value
      }else return question
    })
  }

  console.log(surveyAnswer);
  }

   const handleChange=(e,id)=>{
   
        handleChoiceAnswer(id)
        if(e.target.id===id&& e.target.value){
          setCheckedValue(id)
        }else setCheckedValue('')
        
      let isNotFound = surveyAnswer2?.find(data=>data.title===e.target.title)===undefined
      if(isNotFound){
    
        setSurveyAnswer2([...surveyAnswer2,{"id":id,"query":e.target.title,"answer":e.target.value}])
      }else{
        
           surveyAnswer2?.map(data=>{
            if(data.query===e.target.title){
               return data.answer = e.target.value
            }else return data
            
          })
      }
      console.log(surveyAnswer2)
    }

    const handleChoiceAnswer=(id)=>{
         const isFound= surveyData.map(data=>data?.questions)       
         console.log(isFound,'hellllllll')
    }

    useEffect(()=>{},[surveyAnswer2,surveyAnswer,surveyFinalAnswer])


    const handleSurveyAnswer=()=>{

      setSurveyAnswer2([...surveyAnswer2,surveyAnswer])
      setSurveyFinalAnswer([...surveyFinalAnswer,surveyAnswer2])
  
      if(surveyFinalAnswer!==[]){
      const userSurveyAnswerData={
        "ClientId":userData?.id,
        'questionId':(surveyData?.map(data=>data._id))[0],
        'answers':surveyFinalAnswer
      }

      console.log(userSurveyAnswerData.answers);
      dispatch(sendSurveyAnswer({userSurveyAnswerData,toast}))
    }else alert('survey answer is needed')
  }

    console.log('final answer',surveyFinalAnswer)
  
  return (
    <Box sx={{width:'100%',height:'100vh',display:'flex',flexDirection:'column',alignItems:'center'}}>
      <NavBar isScrolling={isScrolling}/>
      <Box sx={{width:'100%',height:'auto',display:'flex',justifyContent:'center',marginTop:'80px'}}>
        <Box sx={style.questionDisplayMainContainer}>
          <Paper sx={style.questionDisplayContainer}>
             {
              surveyData?.map((item,index)=>
                <Typography key={index} variant='h4' sx={style.questionMainTitle}>
                  {item.questionTitle}
                  {
                    item?.questions?.map((question,index)=>
                    <Box sx={{display:'flex',flexDirection:'column',gap:'20px'}}>
                    { question?.questionType ==='text'?
                      <Box sx={{width:'100%',marginTop:'16px'}}>
                        <TextField 
                          id={question.questionTitle} 
                          setValue={(e)=>handleInputField(e,item.id)} 
                          key={index} 
                          inputValue={surveyAnswer?.answer}
                          questionNumber={index+1} 
                          title={question.questionTitle}
                        />
                       </Box> 
                    :<Box sx={{display:'flex',width:'100%',flexDirection:'column',gap:'20px',marginTop:'20px'}}>
                         {<Box sx={{width:'100%',display:'flex',gap:'8px',color:'#1e1e1e',alignItems:'center'}}>
                            <label style={{fontSize:'16px'}}>{`${index+1}.`}</label>
                            <Typography 
                            sx={{fontSize:handleResponsiveness('14px','16px')}}
                            >{question.questionTitle}</Typography>
                          </Box>
                          }
                         <Box sx={
                          { width:handleResponsiveness('auto','350px'),
                           display:'flex',
                           flexDirection:'column',
                           marginLeft:handleResponsiveness('0px','20px')}}>
                            
                            {question.choiceType==="userInput"?
                              question?.choiceAnswer?.map((item,index)=>
                                <RadioInput 
                                    key={item.answer}  
                                    setValue={(e)=>handleChange(e,item.answer)}
                                    inputValue={item.answer}
                                    id={item.answer} 
                                    questionTitle={item.answer}
                                    data={question.questionTitle}
                                    checkedValue={checkedValue}
                                  />)
                        : question?.choiceAnswer?.map((data,index)=>
                                  data?.answer.map((data,index)=>
                                    <RadioInput 
                                    key={item.answer} 
                                    setValue={(e)=>handleChange(e,data)}
                                    inputValue={item.answer}
                                    id={item.answer} 
                                     data={data}
                                     questionTitle={data}
                                     checkedValue={checkedValue}
                                    
                                  />
                                  )) }
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