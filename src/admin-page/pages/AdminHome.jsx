import { Box, Paper } from '@mui/material'
import React, { useState } from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import LineChart from './chart/LineChart'

const AdminHome = () => {
    const [isDrawerOpen,closeDrawer] = useState(true)
  return (
     <div 
        style={
        {
            width:'100%',
            display:'flex',
            position:'relative',
            flexDirection:'row',
            height:{md:'100vh',sm:'auto'}
            }
        }>
         <SideBar 
          isDrawerOpen={isDrawerOpen} 
          closeDrawer={closeDrawer}
          drawerWidth={isDrawerOpen?200:0}
        />
        <Box sx={{display:'flex',width:'100%',position:'relative',flexDirection:'column'}}>
         <Box sx={{position:'fixed',width:`${isDrawerOpen?86:100}%`,zIndex:200}}> 
         <Header closeDrawer={()=>closeDrawer(prev=>!prev)}/>
         </Box>
         <Box sx={style.topContainer}>
            <Paper sx={{width:'300px',height:'100%',backgroundColor:'#D9D9D9'}}></Paper>
             <Paper sx={{width:'300px',height:'100%',backgroundColor:'#D9D9D9'}}></Paper>
              <Paper sx={{width:'300px',height:'100%',backgroundColor:'#D9D9D9'}}></Paper>
         </Box>
         <Box sx={style.chartDisplay}>
            <LineChart/>
         </Box>
         <Box sx={style.chartDisplay}>
            <LineChart/>
         </Box>
         <Box sx={style.chartDisplay}>
            <LineChart/>
         </Box>
         </Box>
      </div>
  )
}

 const style={
    topContainer:{
        width:'100%',
        height:{md:'200px',xs:'500px'},
        display:'flex',
        flexDirection:{xs:'column',md:'row'},
        justifyContent:'space-around',
        alignItems:'center',
        marginTop:'80px',
        gap:'60px'
    },
    
    chartDisplay:{
        width:{xs:'100%',md:'90%'},
        height:{xs:'350px',md:'400px'},
        marginLeft:'5%'
    }
 }

export default AdminHome