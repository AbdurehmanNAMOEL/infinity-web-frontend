import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllFeedBacks } from '../../redux/features/feedbackSlice'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import UserFeedBackCard from '../components/UserFeedBackCard'
import { handleResponsiveness } from '../../users-page/auth/styles/loginStyle'
import InputSelector from '../../shared/Components/InputSelector'
import { feedbackFilterList } from '../utils/selectorInputs'
import {toast} from 'react-toastify'

const FeedBackPage = ({isDrawerOpen,closeDrawer}) => {
    const dispatch = useDispatch()
    const {usersFeedBacks}= useSelector(state=>state?.feedback)
    const {isLightMode,modeColor}= useSelector(state=>state?.auth)
    const [filterValue,setFilterValue]= useState('All')
    const [userFeedBackValue,setUserFeedBackValue]=useState(usersFeedBacks)
   
    useEffect(()=>{
        dispatch(getAllFeedBacks())
    },[usersFeedBacks])
    
    useEffect(()=>{
      if(filterValue==="All") setUserFeedBackValue(usersFeedBacks)
      else setUserFeedBackValue(usersFeedBacks.filter(data=>data.feedbackGroup===filterValue))    
    },[filterValue,userFeedBackValue,usersFeedBacks])

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

         {usersFeedBacks?.length?  <Box sx={{marginTop:'100px',width:'80%',marginLeft:'10%'}}>
                <InputSelector
                 optionList={feedbackFilterList}
                 optionTitle={'title'}
                 optionValue={'value'}
                 label={'Filter'}
                 inputValue={filterValue}
                 setValue={(e)=>setFilterValue(e.target.value)}
                />
            </Box>:null}  
          {userFeedBackValue?.length? 
          <Grid sx={{marginLeft:handleResponsiveness('-10%','5%'),
                backgroundColor:modeColor,
                height:'auto',marginTop:'10px',width:handleResponsiveness('100%','95%')}} 
                container spacing={8}>
            {
                userFeedBackValue?.map((data,index)=>
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