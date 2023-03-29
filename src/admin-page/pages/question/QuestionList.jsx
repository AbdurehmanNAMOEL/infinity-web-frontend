import { Box, Paper, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteSurvey, getAllSurveyQuestions } from '../../../redux/features/adminSlice'
import Header from '../../components/Header'
import SideBar from '../../components/SideBar'
import SurveyDisplayCard from '../../components/SurveyDisplayCard'

const QuestionList = ({isDrawerOpen,closeDrawer}) => {

    const {users,generatedSurvey}= useSelector(state=>state.admin)
    const {isLightMode}= useSelector(state=>state.auth)
    const dispatch = useDispatch()


    useEffect(()=>{
      dispatch(getAllSurveyQuestions())
    },[generatedSurvey])

    console.log(generatedSurvey)


  return (
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', height: { md: '100vh', sm: 'auto' } }}>
            <SideBar
                isDrawerOpen={isDrawerOpen}
                closeDrawer={closeDrawer}
                drawerWidth={isDrawerOpen ? 200 : 0}
            />
            <Box sx={{ display: 'flex', width: '100%', position: 'relative', flexDirection: 'column' }}>
                <Box sx={{ position: 'fixed', width: `${isDrawerOpen ? 100 : 100}%`, zIndex: 200 }}>
                    <Header headerTitle={'Question List'} closeDrawer={() => closeDrawer(prev => !prev)} />
                </Box>
                <Box sx={{ width: '90%', marginLeft: '5%', marginTop: '80px' }}>
                {!generatedSurvey?.length>0?
                  <Typography 
                    variant='h4' 
                    sx={{textAlign:'center',color:isLightMode?'#1e1e1e':'white'}}>
                      There is no generated Survey
                    </Typography>:null
                  }
                 {
                  generatedSurvey.map((data,index)=>
                     <SurveyDisplayCard 
                       key={data._id} 
                       id={data._id} 
                       index={index}
                       questions={data.questions}
                       questionTitle={data.questionTitle}
                       />
                    )
                 }
                </Box>
            </Box>
        </Box>
  )
}

export default QuestionList