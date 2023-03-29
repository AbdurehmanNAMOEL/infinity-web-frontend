import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllFeedBacks } from '../../redux/features/adminSlice'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import UserFeedBackCard from '../components/UserFeedBackCard'

const FeedBackPage = ({isDrawerOpen,closeDrawer}) => {
    const dispatch = useDispatch()
    const {usersFeedBacks}= useSelector(state=>state?.admin)
    const {isLightMode}= useSelector(state=>state?.auth)
    useEffect(()=>{
        dispatch(getAllFeedBacks())
         console.log(usersFeedBacks)
    },[usersFeedBacks])

   
  return (
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', height: { md: 'auto', sm: 'auto' } }}>
            <SideBar
                isDrawerOpen={isDrawerOpen}
                closeDrawer={closeDrawer}
                drawerWidth={isDrawerOpen ? 200 : 0}
            />
            <Box sx={{ display: 'flex', width: '100%', position: 'relative', flexDirection: 'column',height:'auto' }}>
                <Box sx={{ position: 'fixed', width: `${isDrawerOpen ? 100 : 100}%`, zIndex: 200 }}>
                    <Header closeDrawer={() => closeDrawer(prev => !prev)} />
                </Box>
          {usersFeedBacks?.length>0? 
          <Grid sx={{marginLeft:'5%',height:'auto',marginTop:'80px',width:'90%',justifyContent:'center',placeItems:'center'}} container spacing={2}>
            {
                usersFeedBacks?.map((data,index)=>
                  <Grid item xs={8} md={5}>
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