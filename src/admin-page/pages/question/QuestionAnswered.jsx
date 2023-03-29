import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllAnsweredSurvey } from '../../../redux/features/adminSlice'
import DropDown from '../../components/DropDown'
import Header from '../../components/Header'
import SideBar from '../../components/SideBar'

const QuestionAnswered = ({isDrawerOpen,closeDrawer}) => {

    const dispatch = useDispatch()
    const {answeredSurvey} = useSelector(state=>state.admin)

    useEffect(()=>{
        dispatch(getAllAnsweredSurvey())
    },[])

    console.log(answeredSurvey)
  return (
     <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', height: { md: '100vh', sm: 'auto' } }}>
            <SideBar
                isDrawerOpen={isDrawerOpen}
                closeDrawer={closeDrawer}
                drawerWidth={isDrawerOpen ? 200 : 0}
            />
            <Box sx={{ display: 'flex', width: '100%', position: 'relative', flexDirection: 'column' }}>
                <Box sx={{ position: 'fixed', width: `${isDrawerOpen ? 100 : 100}%`, zIndex: 200 }}>
                    <Header headerTitle={'Answer'} closeDrawer={() => closeDrawer(prev => !prev)} />
                </Box>
             <Grid sx={{marginLeft:'5%',height:'auto',marginTop:'80px',width:'90%'}} container spacing={2}>
                    
                 {
                    answeredSurvey?.map(data=>
                    <Grid item xs={8} md={6}>
                     <DropDown data={data.answers}/>
                     </Grid>    
                    )
                 }
                </Grid> 
         
            </Box>
        </Box>
  )
}

export default QuestionAnswered