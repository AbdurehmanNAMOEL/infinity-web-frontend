import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { handleResponsiveness } from '../../../../users-page/auth/styles/loginStyle'
import Header from '../../../components/Header'
import SideBar from '../../../components/SideBar'
import LineChart from '../LineChart'
import { DailyData, MonthlyData } from '../../../DummyData/data'
import InputSelector from '../../../../shared/Components/InputSelector'
import { graphFilterList } from '../../../utils/selectorInputs'
import PieChart from '../PieChart'

const ChartHomePage = ({closeDrawer,isDrawerOpen}) => {
   const [lineGraphData,setLineData] = useState(MonthlyData())
   const [graphFilter,setGraphFilter] = useState('week')

   useEffect(()=>{
     if(graphFilter==='week'){
      setLineData(DailyData)
     }else if(graphFilter==='month'){
      setLineData(MonthlyData)
     }
   },[graphFilter])
   
   


  return (
      <Box sx={
        { width:'100%',display:'flex',flexDirection:'row',height:{md:'100vh',xs:'100vh'}}}>
        <SideBar 
          isDrawerOpen={isDrawerOpen} 
          closeDrawer={closeDrawer}
          drawerWidth={isDrawerOpen?200:0}
        />
        <Box sx={{display:'flex',width:'100%',position:'relative',flexDirection:'column'}}>
         <Box sx={{position:'fixed',width:`${isDrawerOpen?86:100}%`,zIndex:200}}> 
           <Header closeDrawer={()=>closeDrawer(prev=>!prev)}/>
         </Box>
         <Box sx={
          {
            width:handleResponsiveness('100%','85%'),
            height:handleResponsiveness('50%','60%'),
            marginTop:'60px'
            }}>
            <PieChart/>
            <Box sx={{marginTop:'50px',width:'80%',marginLeft:'5%'}}>
                <InputSelector
                 optionList={graphFilterList}
                 optionTitle={'title'}
                 optionValue={'value'}
                 label={'Filter'}
                 inputValue={graphFilter}
                 setValue={(e)=>setGraphFilter(e.target.value)}
                />
            </Box>
            <LineChart lineGraphData={lineGraphData}/>
        </Box>
         </Box>
         
    </Box>
  )
}

export default ChartHomePage