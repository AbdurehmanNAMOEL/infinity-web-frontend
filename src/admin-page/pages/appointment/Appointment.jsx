import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllAppointments} from '../../../redux/features/adminSlice'
import Header from '../../components/Header'
import SideBar from '../../components/SideBar'
import AppointmentCard from '../../components/AppointmentCard'
import InputSelector from '../../../shared/Components/InputSelector'
import { appointmentFilterList } from '../../utils/selectorInputs'


const Appointment = ({ closeDrawer, isDrawerOpen }) => {
  
      const dispatch = useDispatch()

    const {appointmentList}= useSelector(state=>state.admin)
    const {isLightMode} = useSelector(state=>state.auth)
    const [filterAppointment,setFilterAppointment]= useState('All')
    useEffect(()=>{
        dispatch(getAllAppointments())
    },[])

    // console.log(appointmentList)

  
 
    return (
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', height: { md: '100vh', sm: 'auto' } }}>
            <SideBar
                isDrawerOpen={isDrawerOpen}
                closeDrawer={closeDrawer}
                drawerWidth={isDrawerOpen ? 200 : 0}
            />
            <Box sx={{ display: 'flex', width: '100%', position: 'relative', flexDirection: 'column' }}>
                <Box sx={{ position: 'fixed', width: `${isDrawerOpen ? 100 : 100}%`, zIndex: 200 }}>
                    <Header closeDrawer={() => closeDrawer(prev => !prev)} />
                </Box>
                <Box sx={{ width: '90%', marginLeft: '5%', marginTop: '80px' }}>



         { appointmentList?.length?  
           <Box sx={{marginTop:'40px',width:'90%',marginLeft:'5%'}}>
                <InputSelector
                 optionList={appointmentFilterList}
                 optionTitle={'title'}
                 optionValue={'value'}
                 label={'Filter'}
                 inputValue={filterAppointment}
                 setValue={setFilterAppointment}
                />
            </Box>:null}  


       { appointmentList?.length? <Grid sx={{
            marginLeft:'5%',
            height:'auto',
            marginTop:'20px',
            width:'90%',
         
            
        }} container spacing={2}>
            {
                appointmentList?.map((data,index)=>
                  <Grid item xs={12} md={5}>
                   <AppointmentCard 
                     key={data.id} 
                     name={data.title} 
                     appointmentDate={data.appointmentDate}
                     description={data.description}
                     />
                  </Grid>
  
                  
                )
            }
            </Grid>:<Typography 
               sx={{marginTop:'50px',textAlign:'center',color:isLightMode?'#1e1e1e':'white'}} 
               variant='h4'>you don't have an appointments Yet</Typography>}
                </Box>
            </Box>
        </Box>
    )
}


export default Appointment