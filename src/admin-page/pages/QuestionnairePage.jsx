import { Button, Paper } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import ButtonStyled from '../../users-page/components/ButtonStyled'
import InputField from '../../users-page/components/InputField'
import Header from '../components/Header'
import InputSelector from '../components/InputSelector'
import RadioInput from '../components/RadioInput'
import SideBar from '../components/SideBar'
import { choicesType,questionTypeList } from '../utils/selectorInputs'

const QuestionnairePage = ({closeDrawer,isDrawerOpen}) => {
  const [questionTitle,setQuestionTitle]= useState('text')
  const [questionType,setQuestionType]= useState('userInput')
  const [questionData,setQuestionData]= useState([])
  const [question,setQuestion]= useState('')
  const [choiceAnswer,setChoiceAnswer]=useState([])
  const [singleAnswer,setSingleAnswer]=useState('')
  const [answerData,setAnswerData]=useState([{'title':'Enter Question','value':''}])

  const handleData=()=>{
    setAnswerData([...answerData,{'title':'Enter Question','value':''}])
    setChoiceAnswer([...choiceAnswer,{'answer':singleAnswer}])
  }

  const handleQuestion=()=>{
    if(question!==''){
      if(questionTitle==='choice'){
        if(choiceAnswer!==''){
        setQuestionData([...questionData,
        {
         "questionTitle":question,
          questionType:questionTitle,
         'choiceType':questionType,
         'choiceAnswer':choiceAnswer
        
        }])}else alert('please enter answers')
      }else {
        setQuestionData([...questionData,
        {
          "questionTitle":question,
          questionType:questionTitle
        }])}
     
    }else alert('enter the question first')
  }


  const deleteQuestion=(questionTitle)=>{
    setQuestionData (questionData?.filter(data=>data?.questionTitle!==questionTitle))
  }

  const editQuestion=(questionTitle)=>{
    setQuestionData (questionData?.filter(data=>data?.questionTitle!==questionTitle))
  }
  

  console.log(questionData);
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
         <Paper sx={style.questionMainTitle}>
          <Box sx={{width:'50%'}}>
            <InputField
             inputLabel={'Question Title'}
             setValue={(e)=>setQuestion(e.target.value)}
             inputValue={question}
             type='text'
            />
            </Box>
           <InputSelector 
             setValue={setQuestionTitle}
             inputValue={questionTitle} 
             optionList={questionTypeList}
            />
          {questionTitle!=='text'?
           <InputSelector 
             setValue={setQuestionType}
             inputValue={questionType} 
             optionList={choicesType}/>
            
         :''}
         </Paper>
       
         <Paper sx={style.questionDisplay}>
           <Box sx={{width:'90%',display:'flex',marginTop:'10px'}}>
        
            <InputField
             inputLabel={'Enter your Question'}
             setValue={(e)=>setQuestion(e.target.value)}
             inputValue={question}
             type='text'
            />
            <Box sx={{width:'120px'}}>
            <ButtonStyled 
              bgColor={'#1A6CE8'} 
              label={'+'} 
              setValue={handleQuestion} 
              btnWidth='50px'
              btnHeight={'50px'}
            />
            </Box>
           
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
                 setValue={setSingleAnswer} key={index} choiceType={questionType}/>)
              :''
            }
            {questionTitle!=='text'&&questionType==='userInput'?
             <button onClick={handleData}>+</button>:''}
            </Box>
         
         </Paper>

          {
            questionData?.map((item,index)=>
              <label key={index} htmlFor="#">
                {item.questionTitle}
                <button onClick={()=>deleteQuestion(item.questionTitle)}>Delete</button>
              </label>
            )
          }
         </Box>
         </Box>
    </Box>

  )
}
const style={
    questionMainTitle:{
      width:'80%',
      marginLeft:'2%',
      height:'100px',
      backgroundColor:'#DFDFDF',
      marginTop:'20px',
      display:'flex',
      justifyContent:'center',
      gap:'5px',
      alignItems:'center'
    },

      questionDisplay:{
      width:'80%',
      marginLeft:'2%',
      height:'auto',
      backgroundColor:'#DFDFDF',
      marginTop:'20px',
      display:'flex',
      justifyContent:'center',
      gap:'5px',
      alignItems:'center',
      flexDirection:'column'
    }
}
export default QuestionnairePage