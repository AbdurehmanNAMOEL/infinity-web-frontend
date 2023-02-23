import { Box } from '@mui/system'
import React from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'

const QuestionnairePage = ({closeDrawer,isDrawerOpen}) => {
  return (
    <Box sx={{width:'100%',display:'flex',flexDirection:'row',height:{md:'100vh',sm:'auto'}}}>
        <SideBar
          isDrawerOpen={isDrawerOpen} 
          closeDrawer={closeDrawer}
          drawerWidth={isDrawerOpen?200:0}
        />
        <Box sx={{display:'flex',width:'100%',position:'relative',flexDirection:'column'}}>
         <Box sx={{position:'fixed',width:`${100}%`,zIndex:200}}> 
         <Header closeDrawer={()=>closeDrawer(prev=>!prev)}/>
         </Box>
         </Box>
    </Box>

  )
}

export default QuestionnairePage