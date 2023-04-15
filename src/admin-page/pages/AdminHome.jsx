import { Box, Paper} from '@mui/material'
import React, { useEffect, useState } from 'react'
import {  useSelector } from 'react-redux'

import Card from '../components/Card'
import GridTable from '../components/GridTable'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import LineChart from './chart/LineChart'
import Modal from '../components/Modal'
import AdminSignUp from './auth/pages/AdminSignUp'
import { handleResponsiveness } from '../../users-page/auth/styles/signUpStyle'
import { DailyData, MonthlyData } from '../DummyData/data'

const AdminHome = () => {
    const [isDrawerOpen,closeDrawer] = useState(true)
    const {isLightMode}= useSelector(state=>state.auth)
    const [isNewAdminModalOpened,setIsNewAdminModalOpened]= useState(false)
    const {users,generatedSurvey,appointmentList}= useSelector(state=>state.admin)
  
   const column=[
        {field:"firstName",headerName:"FirstName",flex:1,cellClassName:'name-column-cell'},
        {field:"lastName",headerName:"LastName",flex:1,cellClassName:'name-column-cell'},
        {field:"gender",headerName:"Gender",type:"number",headerAlign:'left',align:'left'},
        {field:"phoneNumber",headerName:"Phone Number",flex:1},
        {field:"email",headerName:"Email",flex:1},
    ]

    const handleModalOpen=(e)=>{
        setIsNewAdminModalOpened(prev=>!prev)
    }

  const [lineGraphData,setLineData] = useState(MonthlyData)

   


  return (
    <>  
     {isNewAdminModalOpened? 
       <Modal closeModal={(e)=>handleModalOpen(e)}>
        <AdminSignUp/>
       </Modal>:null
    }
     <Box sx={
        {
            width:'100%',
            display:'flex',
            position:'relative',
            flexDirection:'row',
            height:{md:'auto',xs:'auto'},
            zIndex:3000
            }
        }>
     
         <SideBar 
          isDrawerOpen={isDrawerOpen} 
          closeDrawer={closeDrawer}
          drawerWidth={isDrawerOpen?200:0}
        />
     
        <Box sx={{display:'flex',width:'100%',position:'relative',flexDirection:'column'}}>
         <Box sx={{position:'fixed',width:`${isDrawerOpen?100:100}%`,zIndex:200}}> 
         <Header 
            openModal={()=>setIsNewAdminModalOpened(prev=>!prev)} 
            closeDrawer={()=>closeDrawer(prev=>!prev)}
          />
         </Box>
         <Box sx={[style.topContainer,{backgroundColor:`${isLightMode?"white":'#1E1E1E'}`}]}>
           <Card 
             cardHeader={'Users'} 
             cardBody={`${users?.length?users?.length:0}`}
            />
           <Card 
             cardHeader={'Survey Questions'} 
             cardBody={`${generatedSurvey?.length?generatedSurvey?.length:0}`}/>
           <Card 
             cardHeader={'Appointments'} 
             cardBody={`${appointmentList?.length>0?appointmentList?.length:0}`}
            />
        
         </Box>
         <Box sx={[style.chartDisplay,{backgroundColor:`${isLightMode?"white":'#1E1E1E'}`}]}>
            <LineChart lineGraphData={lineGraphData}/>
         </Box>
         <Box sx={{width:'90%',marginLeft:'5%',height:'auto',marginBottom:'10px'}}>
         { users?.length>0?
          <GridTable 
            colors={'white'}
            data={users}
            columnFieldsList={column}
          />
          :''}
          </Box>
         </Box>
      </Box>
      </>
  )
}

 const style={
    topContainer:{
        width:'100%',
        height:{md:'200px',xs:'500px'},
        display:'flex',
        flexDirection:{xs:'column',md:'row'},
        justifyContent:'center',
        alignItems:'center',
        marginTop:handleResponsiveness('240px','80px'),
        gap:'60px'
    },
    
    chartDisplay:{
        width:'90%',
        height:{xs:'350px',md:'300px'},
        marginTop:handleResponsiveness('200px','20px'),
        marginLeft:'5%',
        border:'solid 1px #acacac69',
        borderRadius:'15px'
    }
 }

export default AdminHome