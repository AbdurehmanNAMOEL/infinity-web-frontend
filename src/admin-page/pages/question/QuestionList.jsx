import { Box, Paper, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSurveyQuestions } from '../../../redux/features/adminSlice'
import Header from '../../components/Header'
import SideBar from '../../components/SideBar'

const QuestionList = ({isDrawerOpen,closeDrawer}) => {

      const {users,generatedSurvey}= useSelector(state=>state.admin)
    const dispatch = useDispatch()


    useEffect(()=>{
      dispatch(getAllSurveyQuestions())
    },[])

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

                 {
                  generatedSurvey.map((data,index)=>
                  <Paper sx={{justifyContent:'space-between',border:'solid rgba(0,0,0,0.1)',borderLeftWidth:'5px',borderLeftColor:'#1A6CE8',width:'80%',display:'flex',alignItems:'center',height:'80px', marginBottom:'16px'}}>
                    <Box sx={{display:'flex',width:'20p%',alignItems:'center',gap:'50px'}}>
                      <Typography sx={{marginLeft:'16px',width:'80%'}}>{`Q${index+1}`}</Typography>
                      {data.questionTitle}
                    
                    </Box>
                    <Box sx={{width:'40%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                      <Typography >{`Number of Question ${data.questions.length}`}</Typography>
                     </Box> 
                      <Box sx={{display:'flex',alignItems:'center',gap:'50px',marginRight:'20px'}}>
                      <Typography sx={{marginLeft:'16px',color:'#1A6CE8',fontWeight:'bolder',cursor:'pointer'}}>Edit</Typography>
                      <Typography sx={{marginLeft:'16px',color:'red',cursor:'pointer',fontWeight:'bolder'}}>Delete</Typography>
                    </Box>
                    </Paper>
                    )
                 }
                </Box>
            </Box>
        </Box>
  )
}

export default QuestionList