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
import { createNewSurvey, deleteSurvey, editSurvey } from '../../../redux/features/QuestionSlice'
import {toast} from 'react-toastify'
import { getUserStaticData } from '../../../redux/features/authSlice'
import { handleResponsiveness } from '../../../users-page/auth/styles/signUpStyle'
import { useParams } from 'react-router-dom'
import Modal from '../../components/Modal'
import PreviewQuestion from '../../components/PreviewQuestion'
import DeletingModal from '../../components/DeletingModal'

const QuestionnairePage = ({closeDrawer,isDrawerOpen}) => {
  const [questionTitle,setQuestionTitle]= useState('text')
  const [questionMainTitle,setQuestionMainTitle]= useState('')
  const [questionType,setQuestionType]= useState('userInput')
  const [surveyFilteringValue,setSurveyFilteringValue]= useState('')
  const [surveyFilterValue,setSurveyFilterValue]= useState(' ')
  const [surveyFilteredOptionValue,setSurveyFilteredOptionValue]= useState([])
  const {isLightMode,modeColor,userStaticData} = useSelector(state=>state.auth)
  const {editableSurveyValue} = useSelector(state=>state.question)
  const [questionData,setQuestionData]= useState([])
  const [isSurveyPreViewed,setIsSurveyPreViewed]= useState(false)
  const [isDeletingModalOpen,setIsDeletingModalOpen]=useState(false)
  const [isSurveyDelete,setIsSurveyDelete]=useState(false)
  const [question,setQuestion]= useState('')
  const [singleAnswer,setSingleAnswer]=useState('')
  let dynamicIndex=Math.random()*10  
  const [answerData,setAnswerData]=useState([{id:dynamicIndex,"answer":''}])
  const [isValid,setIsValid]= useState(false)
  const dispatch = useDispatch()
  
  const handleData=(inputIndex)=>{ 
    if(questionType === 'userInput') handleUserInput(inputIndex)
  }

  const handleUserInput=(inputIndex)=>{
    setAnswerData(answerData.map((item,index)=>{
       console.log(singleAnswer);
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
  },[questionType,singleAnswer])



  const createQuestion=()=>{
    if(question!==''){
       if(questionData.find(item=>item.query===question)===undefined){
         if(questionTitle==='choice'){
          console.log(answerData.map((item,index)=>item.answer[index]!==''))
           
           if(answerData.find((item,index)=>item.answer==='')===undefined){
             let optionData=[]
              if(questionType==='userInput'){
                optionData=answerData.map(answersValue=>answersValue.answer)
                setQuestionData([...questionData,{"query":question,"type":questionTitle,
                'options':optionData}])
              }else{
                optionData=answerData.map(answersValue=>answersValue.answer)[0]
                setQuestionData([...questionData,{"query":question,"type":questionTitle,
                'options':optionData}])
              }
              }else alert('please enter answers')
          }else {
            setQuestionData([...questionData,
            {"query":question,"type":questionTitle}])
          
          }
            
        }else alert('the question already exists')
    }else alert('enter the question first')
 
  }

  
  const deleteQuestion=(questionTitle)=>{
    setQuestionData (questionData?.filter(data=>data?.query!==questionTitle))
  }
  
  const deleteOrRestNewSurvey=()=>{
    setQuestionData ([])
    setQuestionMainTitle('')
    setQuestionType('userInput')
    setSurveyFilteringValue('')
    setSurveyFilterValue(' ')
    setSurveyFilteredOptionValue([])
    setQuestionData([])
    setQuestion('')
  }

  const editQuestion=(questionTitle)=>{
    setQuestionData (questionData?.filter(data=>data?.query!==questionTitle))
  }


  const handleSurveyFilter=(e)=>{
       setSurveyFilteringValue(e.target.value)
       let data=userStaticData[`${surveyFilteringValue}`]
       setSurveyFilteredOptionValue(data) 
  }

   useEffect(()=>{
    dispatch(getUserStaticData())
  
  },[questionData,surveyFilterValue,surveyFilteredOptionValue])

console.log(questionData);
    const createSurvey=()=>{
     const surveyData={
      'title':questionMainTitle,
      'endAt':'0',
      'questions':questionData,
       "hasImageQuestion": questionData.find(data=>data.type==='image')!==undefined,
     }
      console.log(surveyData)
     dispatch(createNewSurvey({surveyData,toast}))
     deleteOrRestNewSurvey()
  }

  const {id}= useParams()
   console.log(id)

   useEffect(()=>{
    if(id){
      setQuestionData(editableSurveyValue)
    }else setQuestionData([])

   },[id,editableSurveyValue])

   const editSurveyValue=()=>{
     const surveyData={
      'questions':questionData,
     }
    console.log(surveyData)
     dispatch(editSurvey({surveyData,id,toast}))
     deleteOrRestNewSurvey()
  }

   const handleSurveyDeletingApproval=()=>{
       setIsDeletingModalOpen(false)
        setIsSurveyDelete(true)
   }
   const handleDeletingSurvey=()=>{
     setIsDeletingModalOpen(true)
    if(isSurveyDelete){
      dispatch(deleteSurvey({id,toast}))
    }
   }
  return (
    <>
    <Box sx={{width:'100%',display:'flex',flexDirection:'row',height:'auto'}}>
        <SideBar
          isDrawerOpen={isDrawerOpen} 
          closeDrawer={closeDrawer}
          drawerWidth={isDrawerOpen?200:0}
        />
        <Box sx={{display:'flex',height:'100vh',width:'100%',position:'relative',flexDirection:'column'}}>
        <Box sx={{position:'fixed',height:'auto',width:`${isDrawerOpen?100:100}%`,zIndex:200}}> 
         <Header closeDrawer={()=>closeDrawer(prev=>!prev)}/>
         <Box sx={{height:'90vh',overflowY:'scroll',marginTop:'80px'}}>
         <Paper sx={[style.questionMainTitle,{backgroundColor:modeColor}]}>
          <Box sx={{width:handleResponsiveness('100%','15%'),height:'50px'}}>
            <InputField
             inputLabel={'Question Title'}
             setValue={(e)=>setQuestionMainTitle(e.target.value)}
             inputValue={questionMainTitle}
             type='text'
             width={'100%'}
             setValidation={setIsValid}
            />
            </Box>
          <Box sx={{
            width:handleResponsiveness('95%','65%'),
            display:'flex',
            marginTop:'20px',
            marginBottom:handleResponsiveness('20px','0px'),
            flexDirection:handleResponsiveness('column','row'),
            gap:handleResponsiveness('20px','50px'),
            marginLeft:handleResponsiveness('-5%','-150px')}}>
           <InputSelector 
             setValue={(e)=>setQuestionTitle(e.target.value)}
             inputValue={questionTitle} 
             optionList={questionTypeList}
             label='Question type'
             optionValue={'value'}
             optionTitle={'title'}
             selectorWidth={'100%'}
             setValidation={setIsValid}
            />
          {questionTitle!=='text' && questionTitle!=='image'?
           <InputSelector 
             setValue={(e)=>setQuestionType(e.target.value)}
             inputValue={questionType} 
             optionList={choicesType}
             optionValue={'value'}
             optionTitle={'title'}
             selectorWidth={'100%'}
             label={'Choice type'}
             />:''}
            <InputSelector 
             setValue={handleSurveyFilter}
             inputValue={surveyFilteringValue} 
             optionList={surveyAccessingFilterList}
             label={'SurveyFilter'}
             selectorWidth={'100%'}
             optionValue={'value'}             
             optionTitle={'title'} 
             />
            {surveyFilteredOptionValue?.length?
             <InputSelector 
              setValue={(e)=>setSurveyFilterValue(e.target.value)}
              inputValue={surveyFilterValue} 
              optionList={surveyFilteredOptionValue}
              label={`${surveyFilteringValue}`}
              selectorWidth={'100%'}
              optionValue={'id'}
              optionTitle={'en'}
              />
             :''}
      
         
         </Box>
         
         </Paper>
       
         <Paper sx={style.questionDisplay}>
           <Box sx={{
            width:'90%',
            display:'flex',
            flexDirection:'row',
            marginTop:'15px'
            }}>
           
          <Box sx={{width:'90%',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Typography 
              sx={{marginRight:'10px',fontSize:handleResponsiveness('14px','24px')}} >{`Q${questionData?.length+1}`}</Typography>  
              <InputField
               inputLabel={'Enter your Question'}
               setValue={(e)=>setQuestion(e.target.value)}
               inputValue={question}
               type='text'
               width={'100%'}
               setValidation={setIsValid}
              />
            </Box>
            <Box sx={{marginLeft:handleResponsiveness('0px','-30px')}}>
             <ButtonStyled
              label={'Add'}
              btnWidth={'100px'}
              bgColor={'#1A6CE8'}
              setValue={createQuestion}
            />
            </Box>
           </Box>
             <Box sx={{
              width:handleResponsiveness('95%','80%'),
              display:'flex',
              gap:'20px',
              flexDirection:'column',
              height:'auto',
              marginTop:'30px',
              marginBottom:'20px',

            }}>
            {
              questionTitle!=='text'&& questionTitle!=='image'?
              
              answerData?.map((item,index)=>
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
            { questionData.length>0?
            <Box sx={style.questionGeneratorContainer}>
            <Box sx={{width:'100%',display:'flex',justifyContent:'flex-end'}}>  
            <ButtonStyled 
               sx={{marginRight:'60px'}} 
               setValue={()=>setIsSurveyPreViewed(true)} 
               label={'Preview'} 
               btnHeight={'40px'}
               btnWidth={'120px'}
               bgColor='#1A6CE8'/>
            </Box>
             {questionData?.map((item,index)=>
              <Paper sx={
                {
                  width:handleResponsiveness('97%','80%'),
                  marginTop:'20px',
                  height:handleResponsiveness('auto','50px'),
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'space-around',
                  backgroundColor:'white',
                  flexDirection:handleResponsiveness('column','row')
                  }} key={index} htmlFor="#">
               <Typography sx={{
                width:handleResponsiveness('100%','80%'),
                fontSize:handleResponsiveness('12px','16px'),
                padding:handleResponsiveness('10px','0px'),
                wordWrap:'break-word',
                whiteSpace:'pre-wrap',
                marginLeft:'10px'}}>{item.query}</Typography> 
                <Box sx={{
                  width:handleResponsiveness('90%','10%'),
                  marginBottom:handleResponsiveness('20px','0px'),
                  marginTop:handleResponsiveness('10px','0px'),
                  display:'flex',
                  justifyContent:'flex-end'
                  }}>
                   <button style={{
                    width:'80px',
                    cursor:'pointer',
                    height:'90%',
                    border:'none',
                    backgroundColor:'white',
                    color:'red'}} onClick={()=>deleteQuestion(item.query)}>Delete</button>
                </Box>
              </Paper>
        )
          }
         <Box sx={
          {
            width:handleResponsiveness('90%','80%'),
            marginTop:'20px',
            marginBottom:'30px',
            height:'50px',
            display:'flex',
            justifyContent:'space-between'
          }}>

            <ButtonStyled 
               sx={{marginRight:'60px'}} 
               setValue={id?editSurveyValue:createSurvey} 
               label={id?'Edit':'Create'} 
               btnHeight={'40px'}
               btnWidth={'120px'}
               bgColor='#1A6CE8'/>
              
              <ButtonStyled 
               sx={{marginRight:'60px'}} 
               setValue={id?handleDeletingSurvey:deleteOrRestNewSurvey} 
               label={'Delete'} 
               btnHeight={'40px'}
               btnWidth={'120px'}
               bgColor='red'/>
        </Box>
          </Box>:''}
               
         </Box>
        </Box>
         </Box>
    </Box>
    
    {isSurveyPreViewed?
       <Modal>
         <PreviewQuestion
           setIsQuestionPreviewed={setIsSurveyPreViewed} 
           surveyQuestion={questionData}/>
       </Modal>:''}

   {isDeletingModalOpen?
     <DeletingModal
       handleSurveyDeletingApproval={handleSurveyDeletingApproval}
       setIsDeletingModalOpen={setIsDeletingModalOpen}
       />
      :''}   


</>
  )
}
const style={
    questionMainTitle:{
      width:handleResponsiveness('100%','80%'),
      marginLeft:'2%',
      height:handleResponsiveness('auto','120px'),
      backgroundColor:'#DFDFDF',
      marginTop:'80px',
      display:'flex',
      justifyContent:'space-around',
      gap:'5px',
      alignItems:'center',
      flexDirection:handleResponsiveness('column','row'),
      marginBottom:'20px'
    },
 questionDisplay:{
      width:handleResponsiveness('100%','80%'),
      marginLeft:'2%',
      height:'auto',
      border:'dashed 2px #1e1e1e',
      marginTop:'20px',
      display:'flex',
      justifyContent:'center',
      gap:'5px',
      alignItems:'center',
      flexDirection:'column',
      marginBottom:handleResponsiveness('50px','0px')
      
    },
    questionGeneratorContainer:{
      width:handleResponsiveness('95%','80%'),
      height:'auto',
      display:'flex',
      flexDirection:'column',
      backgroundColor:'#DFDFDF',
      marginLeft:handleResponsiveness('2.5%','25px'),
      marginTop:'20px',
      gap:'10px',
      marginBottom:'40px',
      justifyContent:'center',
      alignItems:'center'
    }
}
export default QuestionnairePage