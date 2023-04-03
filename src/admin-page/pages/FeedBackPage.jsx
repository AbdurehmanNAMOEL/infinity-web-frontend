import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllFeedBacks } from '../../redux/features/adminSlice'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import UserFeedBackCard from '../components/UserFeedBackCard'
import { handleResponsiveness } from '../../users-page/auth/styles/loginStyle'

const FeedBackPage = ({isDrawerOpen,closeDrawer}) => {
    const dispatch = useDispatch()
    const {usersFeedBacks}= useSelector(state=>state?.admin)
    const {isLightMode,modeColor}= useSelector(state=>state?.auth)
    useEffect(()=>{
        dispatch(getAllFeedBacks())
    },[usersFeedBacks])

   
  return (
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row',height:'100vh',backgroundColor:modeColor}}>
            <SideBar
                isDrawerOpen={isDrawerOpen}
                closeDrawer={closeDrawer}
                drawerWidth={isDrawerOpen ? 200 : 0}
            />
            <Box sx={{ display: 'flex',backgroundColor:modeColor, width: '100%', position: 'relative', flexDirection: 'column',height:'auto' }}>
                <Box sx={{ position: 'fixed', width: `${isDrawerOpen ? 100 : 100}%`, zIndex: 200 }}>
                    <Header closeDrawer={() => closeDrawer(prev => !prev)} />
                </Box>
          {usersFeedBacks?.length? 
          <Grid sx={{marginLeft:handleResponsiveness('-10%','5%'),
                backgroundColor:modeColor,
                height:'auto',marginTop:'80px',width:handleResponsiveness('100%','95%')}} container spacing={8}>
            {
                usersFeedBacks?.map((data,index)=>
                  <Grid item xs={12} md={5}>
                   <UserFeedBackCard 
                     key={data.id} 
                     name={'abdurehman'} 
                     feedBackGroup={data.feedbackGroup}
                     suggestion={data.suggestion}
                     id={data.id}
                     />
                  </Grid>
  
                  
                )
            }
            </Grid>:<Typography 
               sx={{marginTop:'80px',textAlign:'center',color:isLightMode?'#1e1e1e':'white'}} 
               variant='h5'>There is no feedBack Yet</Typography>}
            </Box>
        </Box> 
  )
}

export default FeedBackPage