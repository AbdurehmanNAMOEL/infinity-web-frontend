import { Box } from '@mui/material'
import React from 'react'
import Header from '../../../components/Header'
import SideBar from '../../../components/SideBar'
import LineChart from '../LineChart'

const ChartHomePage = ({closeDrawer,isDrawerOpen}) => {
  return (
      <Box sx={
        { width:'100%',display:'flex',flexDirection:'row',height:{md:'100vh',sm:'auto'}}}>
        <SideBar 
          isDrawerOpen={isDrawerOpen} 
          closeDrawer={closeDrawer}
          drawerWidth={isDrawerOpen?200:0}
        />
        <Box sx={{display:'flex',width:'100%',position:'relative',flexDirection:'column'}}>
         <Box sx={{position:'fixed',width:`${isDrawerOpen?86:100}%`,zIndex:200}}> 
           <Header closeDrawer={()=>closeDrawer(prev=>!prev)}/>
         </Box>
         <Box sx={{width:{md:'95%',xs:'100%'},height:'80%',marginTop:'60px'}}>
            <LineChart/>
        </Box>
         </Box>
         
    </Box>
  )
}

export default ChartHomePage