import { Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import ButtonStyled from '../../../users-page/components/ButtonStyled'
import InputField from '../../../users-page/components/InputField'
import Header from '../../components/Header'
import InputSelector from '../../../shared/Components/InputSelector'
import RadioInput from '../../components/RadioInput'
import SideBar from '../../components/SideBar'
import { choicesType,questionTypeList, surveyAccessingFilterList } from '../../utils/selectorInputs'
import { useDispatch, useSelector } from 'react-redux'
import { createNewSurvey } from '../../../redux/features/adminSlice'
import {toast} from 'react-toastify'
import DropDown from '../../components/DropDown'
const QuestionnairePage = ({closeDrawer,isDrawerOpen}) => {
  const [questionTitle,setQuestionTitle]= useState('text')
  const [questionMainTitle,setQuestionMainTitle]= useState('')
  const [questionType,setQuestionType]= useState('userInput')
  const {isLightMode,modeColor} = useSelector(state=>state.auth)
  const [questionData,setQuestionData]= useState([])
  const [question,setQuestion]= useState('')
  const [singleAnswer,setSingleAnswer]=useState('')
  let dynamicIndex=Math.random()*10  
  const [answerData,setAnswerData]=useState([{id:dynamicIndex,"answer":''}])
  
  const dispatch = useDispatch()

  const handleData=(inputIndex)=>{ 
    if(questionType === 'userInput') handleUserInput(inputIndex)
  }

  const createSurvey=()=>{
     const surveyData={
      'questionTitle':questionMainTitle,
      'questionType':'Mixed',
      'questions':questionData
     }
     dispatch(createNewSurvey({surveyData,toast}))
  }
  

  const handleUserInput=(inputIndex)=>{
    setAnswerData(answerData.map((item,index)=>{
      if(item.id===inputIndex){
          return {'id':item.id,'answer':singleAnswer}
      }else return item
    }))
  }

 
  useEffect(()=>{
    if(questionType!=='userInput'){
        let value=questionType.split('/') 
        setAnswerData(answerData.filter((item,index)=>index===0))
        setAnswerData([{'answer':[value[0],value[1]]}])
    }else {
       setAnswerData([...answerData],answerData.filter((item,index)=>index))
       
    }
  },[answerData,questionType])




  const createQuestion=()=>{
    if(question!==''){
       if(questionData.find(item=>item.questionTitle===question)===undefined){
         if(questionTitle==='choice'){
          console.log(answerData.map((item,index)=>item.answer[index]!==''))
           if(answerData.find((item,index)=>item.answer==='')===undefined){
              setQuestionData([...questionData,{
              "questionTitle":question,questionType:questionTitle,
              'choiceType':questionType,
              'choiceAnswer':answerData
            }])}else alert('please enter answers')
          }else {
            setQuestionData([...questionData,
            {"questionTitle":question,questionType:questionTitle}])
          
          }
            
        }else alert('the question already exists')
    }else alert('enter the question first')
 
  }


  const deleteQuestion=(questionTitle)=>{
    setQuestionData (questionData?.filter(data=>data?.questionTitle!==questionTitle))
  }


  const editQuestion=(questionTitle)=>{
    setQuestionData (questionData?.filter(data=>data?.questionTitle!==questionTitle))
  }


  useEffect(()=>{},[questionData])


  

  return (
    <Box sx={{width:'100%',display:'flex',flexDirection:'row',height:{md:'100vh',sm:'auto'}}}>
        <SideBar
          isDrawerOpen={isDrawerOpen} 
          closeDrawer={closeDrawer}
          drawerWidth={isDrawerOpen?200:0}
        />
        <Box sx={{display:'flex',width:'100%',position:'relative',flexDirection:'column'}}>
        <Box sx={{position:'fixed',width:`${isDrawerOpen?100:100}%`,zIndex:200}}> 
         <Header closeDrawer={()=>closeDrawer(prev=>!prev)}/>
         <Paper sx={[style.questionMainTitle,{backgroundColor:modeColor}]}>
          <Box sx={{width:'30%',height:'50px'}}>
            <InputField
             inputLabel={'Question Title'}
             setValue={(e)=>setQuestionMainTitle(e.target.value)}
             inputValue={questionMainTitle}
             type='text'
            />
            </Box>
            <Box sx={{width:'65%',display:'flex',gap:'50px',marginLeft:'-150px'}}>
           <InputSelector 
             setValue={(e)=>setQuestionTitle(e.target.value)}
             inputValue={questionTitle} 
             optionList={questionTypeList}
             label='Question type'
            />
            <InputSelector 
             setValue={(e)=>setQuestionType(e.target.value)}
             inputValue={questionType} 
             optionList={surveyAccessingFilterList}
             label={'Can access'}
             />
      
          {questionTitle!=='text'?
           <InputSelector 
             setValue={(e)=>setQuestionType(e.target.value)}
             inputValue={questionType} 
             optionList={choicesType}
             label={'Choice type'}
             />
            
         :''}
         </Box>
         
         </Paper>
       
         <Paper sx={style.questionDisplay}>
           <Box sx={{width:'90%',display:'flex',justifyContent:'center',flexDirection:'row',marginTop:'15px',alignItems:'center'}}>
            <Typography sx={{marginTop:'26px',marginRight:'10px'}} variant='h4'>{`Q${questionData?.length+1}`}</Typography>
            <InputField
             inputLabel={'Enter your Question'}
             setValue={(e)=>setQuestion(e.target.value)}
             inputValue={question}
             type='text'
            />
            <button 
              onClick={createQuestion} 
              style={
              {
                backgroundColor:'#1A6CE8',
                width:'70px',
                color:'white',
                border:'none',
                height:'50px',
                cursor:'pointer',
                marginLeft:'-32px',
                marginTop:'31px'
              
                }}>Add</button>
           
           
           </Box>
             <Box sx={{
              width:'90%',
              display:'flex',
              gap:'20px',
              flexDirection:'column',
              height:'auto',
              marginTop:'30px',
              marginBottom:'10px'
            }}>
            {
              questionTitle!=='text'?
              
              answerData.map((item,index)=>
              <RadioInput 
                key={item.id} 
                setValue={setSingleAnswer} 
                index={item.id}
                choiceType={questionType}
                setData={handleData}
                answerData={answerData}
                setAnswerData={setAnswerData}
                inputValue={singleAnswer}
              />):''}
            </Box>
         
         </Paper>
            { questionData.length>0?<Box sx={style.questionGeneratorContainer}>
             {questionData?.map((item,index)=>
              <Paper sx={{width:'80%',marginLeft:'20px',marginTop:'20px',height:'50px',display:'flex',alignItems:'center',justifyContent:'space-around',backgroundColor:'white'}} key={index} htmlFor="#">
               <Typography sx={{width:'80%'}}>{item.questionTitle}</Typography> 
                <button style={{width:'80px',cursor:'pointer',height:'90%',border:'none',backgroundColor:'white',color:'red'}} onClick={()=>deleteQuestion(item.questionTitle)}>Delete</button>
              </Paper>
        )
          }
         <Box sx={{width:'100%',display:'flex',justifyContent:'flex-end'}}>
            <ButtonStyled setValue={createSurvey} label={'Create'} bgColor='#1A6CE8'/>
        </Box>
          </Box>:''}
               
         </Box>
        
         </Box>
         
    </Box>

  )
}
const style={
    questionMainTitle:{
      width:'80%',
      marginLeft:'2%',
      height:'80px',
      backgroundColor:'#DFDFDF',
      marginTop:'80px',
      display:'flex',
      justifyContent:'space-around',
      gap:'5px',
      alignItems:'center'
    },
 questionDisplay:{
      width:'80%',
      marginLeft:'2%',
      height:'auto',
      border:'dashed 2px #1e1e1e',
      marginTop:'20px',
      display:'flex',
      justifyContent:'center',
      gap:'5px',
      alignItems:'center',
      flexDirection:'column'
    },
    questionGeneratorContainer:{
      width:'80%',
      height:'auto',
      display:'flex',
      flexDirection:'column',
      backgroundColor:'#DFDFDF',
      marginLeft:'25px',
      marginTop:'20px',
      gap:'10px'
    }
}
export default QuestionnairePage