import { Box, Grid, Paper, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllAnsweredSurvey } from '../../../redux/features/adminSlice'
import DropDown from '../../components/DropDown'
import Header from '../../components/Header'
import SideBar from '../../components/SideBar'
import ButtonStyled from '../../../users-page/components/ButtonStyled'
import Modal from '../../components/Modal'
import { useState } from 'react'

const QuestionAnswered = ({isDrawerOpen,closeDrawer}) => {

    const dispatch = useDispatch()
    const {answeredSurvey} = useSelector(state=>state.admin)
    const [isModalOpen,setModalOpen]= useState(false)
    const [isRejected,setIsRejected]= useState(false)

    useEffect(()=>{
        dispatch(getAllAnsweredSurvey())
    },[answeredSurvey])

  return (
    <>
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', height: { md: '100vh', sm: 'auto' } }}>
        <SideBar
          isDrawerOpen={isDrawerOpen}
          closeDrawer={closeDrawer}
          drawerWidth={isDrawerOpen ? 200 : 0}
          />
        <Box sx={{ display: 'flex', width: '100%', position: 'relative', flexDirection: 'column' }}>
          <Box sx={{ position: 'fixed', width: `${isDrawerOpen ? 100 : 100}%`, zIndex: 200 }}>
            <Header headerTitle={'Answer'} closeDrawer={() =>closeDrawer(prev => !prev)} />
          </Box>
          {answeredSurvey.length>0?
             <Grid sx={{marginLeft:'5%',height:'auto',marginTop:'80px',width:'90%'}} container spacing={2}>
            {answeredSurvey?.map(data=>
                <Grid item xs={8} md={6}>
                  <DropDown 
                    isModalOpen={isModalOpen}
                    setModalOpen={setModalOpen}
                    isRejected={isRejected}
                    id={data?.responses} 
                    data={data?.responses}
                  />
                </Grid>    
            )}
            </Grid>:<Typography>There is no answer yet</Typography> }
          </Box>
        </Box>

    {isModalOpen?
      <Modal>
        <Paper sx={{width:'400px',height:'200px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
          <Typography sx={{width:'90%'}}>Are you sure you want to delete this responded survey?</Typography>
          <Box sx={{width:'70%',height:'50px',display:'flex',gap:'40px',marginTop:'30px'}}>
             <ButtonStyled 
               sx={{marginRight:'60px'}} 
               label={'No'} 
               btnHeight={'40px'}
               btnWidth={'120px'}
               setValue={()=>setModalOpen(false)}
               bgColor='#1A6CE8'/>
              
              <ButtonStyled 
               sx={{marginRight:'60px'}} 
               setValue={()=>setIsRejected(true)}
               label={'yes'} 
               btnHeight={'40px'}
               btnWidth={'120px'}
               bgColor='red'/>
          </Box>
        </Paper>
      </Modal>:''}   
        </>
  )
}

export default QuestionAnswered