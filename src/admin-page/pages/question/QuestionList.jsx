import { Box, Grid, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getAllSurveyQuestions } from '../../../redux/features/adminSlice'
import Header from '../../components/Header'
import SideBar from '../../components/SideBar'
import SurveyDisplayCard from '../../components/SurveyDisplayCard'
import Modal from '../../components/Modal'
import ButtonStyled from '../../../users-page/components/ButtonStyled'
import PreviewQuestion from '../../components/PreviewQuestion'
import { handleResponsiveness } from '../../../users-page/auth/styles/signUpStyle'
import DeletingModal from '../../components/DeletingModal'
import {toast} from 'react-toastify'
import { deleteSurvey } from '../../../redux/features/QuestionSlice'
import SearchBar from '../../../shared/Components/SearchBar'
const QuestionList = ({isDrawerOpen,closeDrawer}) => {

    const {users,generatedSurvey}= useSelector(state=>state.admin)
    const {isLightMode,modeColor}= useSelector(state=>state.auth)
    const [isDeletingModalOpen,setIsDeletingModalOpen]= useState(false)
    const [isDeletingApproved,setIsDeletingApproved]= useState(false)
    const [isQuestionPreviewed,setIsQuestionPreviewed]= useState(false)
    const [previewQuestionData,setPreviewQuestionData]= useState([])
    const [filteredSurveyList,setFilteredSurveyList]= useState(generatedSurvey)
    const [filteringValue,setFilteringValue]= useState('')
    const [id,setId]= useState('')
    const dispatch = useDispatch()
    
    useEffect(()=>{
      dispatch(getAllSurveyQuestions())
    },[])

   useEffect(()=>{
    let surveyList=generatedSurvey.find(data=>data.title.includes(filteringValue))
    if(filteringValue===''){
      setFilteredSurveyList(generatedSurvey)
    }else if(surveyList!==undefined) {
      setFilteredSurveyList([surveyList])
    }
   },[filteringValue,generatedSurvey])

  console.log(generatedSurvey.find(data=>data.title.includes(filteringValue)));
   const handleSurveyDeletingApproval=()=>{
        setIsDeletingModalOpen(false)
        setIsDeletingApproved(true)
     
   }

   useEffect(()=>{
      if(isDeletingApproved){
            dispatch(deleteSurvey({id,toast}))
      }
   },[isDeletingApproved])


  return (
    <>
    {isDeletingModalOpen?
     <DeletingModal
       handleSurveyDeletingApproval={handleSurveyDeletingApproval}
       setIsDeletingModalOpen={setIsDeletingModalOpen}
       />
      :''} 
      {isQuestionPreviewed?
      <Modal>
        <PreviewQuestion
          setIsQuestionPreviewed={setIsQuestionPreviewed} 
          surveyQuestion={previewQuestionData}/>
      </Modal>:''} 
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
            <SideBar
                isDrawerOpen={isDrawerOpen}
                closeDrawer={closeDrawer}
                drawerWidth={isDrawerOpen ? 200 : 0}
            />
            <Box sx={{ display: 'flex', width: '100%', position: 'relative', flexDirection: 'column'}}>
                <Box sx={{ position: 'fixed', width: `${isDrawerOpen ? 100 : 100}%`, zIndex: 200 }}>
                    <Header headerTitle={'Question List'} closeDrawer={() => closeDrawer(prev => !prev)} />
                </Box>
                <Box sx={{ width: '90%', marginLeft: '5%', marginTop: '80px' }}>
                   {generatedSurvey?.length>0? <Box sx={{width:'80%',marginLeft:handleResponsiveness('0','5%')}}>
                    <SearchBar 
                     inputValue={filteringValue}
                     setChangeValue={(e)=>setFilteringValue(e.target.value)}
                     />
                  </Box>:''}
                {!generatedSurvey?.length>0?
                  <Typography 
                    variant='h4' 
                    sx={{textAlign:'center',color:isLightMode?'#1e1e1e':'white'}}>
                      There is no generated Survey
                    </Typography>:null
                  }
             <Grid sx={{marginLeft:handleResponsiveness('-10%','0%'),
                backgroundColor:modeColor,
                height:'auto',marginTop:'2px',
                width:handleResponsiveness('100%','95%'),
                position:handleResponsiveness('relative','absolute')
              }} 
                container spacing={8}>
            {filteredSurveyList?.map((data,index)=>
              <Grid item xs={12} md={5}>
                  <SurveyDisplayCard 
                    key={data.id} 
                    id={data.id} 
                    createdAt={data.createdAt}
                    index={index}
                    questions={data?.questions}
                    questionTitle={data.title}
                    setIsModalVisible={setIsDeletingModalOpen}
                    isDeletingApproved={isDeletingApproved}
                    setPreviewData={setPreviewQuestionData}
                    setIsQuestionPreviewed={setIsQuestionPreviewed}
                    setId={setId}
                  />
                  </Grid>
                    )
                 }</Grid>
                </Box>
            </Box>
        </Box>
        </>
  )
}

export default QuestionList